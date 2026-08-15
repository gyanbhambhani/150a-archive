import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { items } from "../src/content/items";
import { itemJsonLd } from "../src/lib/jsonld";
import { computeHindsightLag, formatLag } from "../src/lib/lag";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "../public/exports");
mkdirSync(outDir, { recursive: true });

function csv(value: string | number | string[] | undefined): string {
  const raw = Array.isArray(value) ? value.join("; ") : String(value ?? "");
  return `"${raw.replaceAll('"', '""')}"`;
}

const json = items.map((item) => ({
  ...item,
  hindsightLag: computeHindsightLag(item),
  hindsightLagLabel: formatLag(computeHindsightLag(item)),
  jsonld: itemJsonLd(item),
}));
writeFileSync(join(outDir, "items.json"), JSON.stringify(json, null, 2));

const metaCols = [
  "slug",
  "dcterms:title",
  "dcterms:creator",
  "dcterms:created",
  "dcterms:temporal",
  "dcterms:description",
  "dcterms:subject",
  "dcterms:type",
  "dcterms:format",
  "dcterms:identifier",
  "dcterms:source",
  "dcterms:language",
  "dcterms:rights",
  "dcterms:coverage",
  "mkt:temporalStance",
  "mkt:reasoningPresence",
  "mkt:affectiveRegister",
  "mkt:affectAttribution",
  "mkt:machineLegibility",
  "mkt:hindsightLag",
  "mkt:wayOfKnowing",
  "externalUrl",
];

const metaRows = items.map((item) => [
  item.slug,
  item.title,
  item.creator.join("; "),
  item.dateCreated,
  item.dateOfEvent,
  item.description,
  item.subject.join("; "),
  item.type,
  item.format,
  item.identifier,
  item.source,
  item.language,
  item.rights,
  item.coverage,
  item.temporalStance,
  item.reasoningPresence,
  item.affectiveRegister.join("; "),
  item.affectAttribution,
  item.machineLegibility,
  computeHindsightLag(item) ?? "",
  item.wayOfKnowing,
  item.externalUrl,
]);

writeFileSync(
  join(outDir, "metadata.csv"),
  [metaCols.join(","), ...metaRows.map((row) => row.map(csv).join(","))].join(
    "\n",
  ) + "\n",
);

const omekaCols = [
  "dcterms:title",
  "dcterms:creator",
  "dcterms:contributor",
  "dcterms:publisher",
  "dcterms:created",
  "dcterms:temporal",
  "dcterms:description",
  "dcterms:subject",
  "dcterms:type",
  "dcterms:format",
  "dcterms:identifier",
  "dcterms:source",
  "dcterms:language",
  "dcterms:rights",
  "dcterms:rightsHolder",
  "dcterms:relation",
  "dcterms:coverage",
];

const omekaRows = items.map((item) => {
  const lag = formatLag(computeHindsightLag(item));
  const qualifier =
    `${item.description} [mkt:temporalStance=${item.temporalStance}; ` +
    `mkt:reasoningPresence=${item.reasoningPresence}; ` +
    `mkt:affectiveRegister=${item.affectiveRegister.join("/")}; ` +
    `mkt:affectAttribution=${item.affectAttribution}; ` +
    `mkt:machineLegibility=${item.machineLegibility}; ` +
    `mkt:hindsightLag=${lag}; mkt:wayOfKnowing=${item.wayOfKnowing}. ` +
    `LOSS: custom mkt fields flattened into dcterms:description.]`;
  return [
    item.title,
    item.creator.join("; "),
    (item.contributor ?? []).join("; "),
    item.publisher ?? "",
    item.dateCreated,
    item.dateOfEvent,
    qualifier,
    item.subject.join("; "),
    item.type,
    item.format,
    item.identifier,
    item.source,
    item.language,
    item.rights,
    item.rightsHolder ?? "",
    (item.relation ?? []).join("; "),
    item.coverage,
  ];
});

writeFileSync(
  join(outDir, "omeka-import.csv"),
  [omekaCols.join(","), ...omekaRows.map((row) => row.map(csv).join(","))].join(
    "\n",
  ) + "\n",
);

console.log("wrote public/exports/{items.json,metadata.csv,omeka-import.csv}");
