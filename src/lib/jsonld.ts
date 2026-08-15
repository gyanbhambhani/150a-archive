import { SITE_TITLE, SITE_URL } from "./site";
import { computeHindsightLag, formatLag } from "./lag";
import type { ArchiveItem } from "./types";

export function itemJsonLd(item: ArchiveItem): Record<string, unknown> {
  const lag = computeHindsightLag(item);
  return {
    "@context": {
      schema: "https://schema.org/",
      dcterms: "http://purl.org/dc/terms/",
      mkt: "https://candle-archive.local/ns/mkt/",
    },
    "@type": ["schema:CreativeWork", "schema:ArchiveComponent"],
    "@id": `${SITE_URL}/items/${item.slug}`,
    "schema:name": item.title,
    "schema:creator": item.creator.map((name) => ({
      "@type": "schema:Person",
      "schema:name": name,
    })),
    "schema:dateCreated": item.dateCreated,
    "schema:description": item.description,
    "schema:inLanguage": item.language,
    "schema:url": item.externalUrl,
    "schema:isPartOf": {
      "@type": "schema:Archive",
      "schema:name": SITE_TITLE,
      "schema:url": SITE_URL,
    },
    "dcterms:title": item.title,
    "dcterms:creator": item.creator,
    "dcterms:created": item.dateCreated,
    "dcterms:temporal": item.dateOfEvent,
    "dcterms:description": item.description,
    "dcterms:subject": item.subject,
    "dcterms:type": item.type,
    "dcterms:format": item.format,
    "dcterms:identifier": item.identifier,
    "dcterms:source": item.source,
    "dcterms:language": item.language,
    "dcterms:rights": item.rights,
    "dcterms:coverage": item.coverage,
    "mkt:temporalStance": item.temporalStance,
    "mkt:reasoningPresence": item.reasoningPresence,
    "mkt:affectiveRegister": item.affectiveRegister,
    "mkt:affectAttribution": item.affectAttribution,
    "mkt:machineLegibility": item.machineLegibility,
    "mkt:hindsightLag": lag,
    "mkt:hindsightLagLabel": formatLag(lag),
    "mkt:wayOfKnowing": item.wayOfKnowing,
  };
}

export function collectionJsonLd(itemCount: number): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Archive",
    name: SITE_TITLE,
    url: SITE_URL,
    creator: {
      "@type": "Person",
      name: "Gyan Bhambhani",
    },
    numberOfItems: itemCount,
    license: "https://creativecommons.org/licenses/by-nc/4.0/",
  };
}
