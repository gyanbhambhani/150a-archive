import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { items } from "../src/content/items";
import { computeHindsightLag, lagAllowed } from "../src/lib/lag";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const required = [
  "title",
  "creator",
  "dateCreated",
  "dateOfEvent",
  "description",
  "subject",
  "type",
  "format",
  "identifier",
  "source",
  "language",
  "rights",
  "coverage",
  "externalUrl",
  "humanVoice",
  "machineVoice",
] as const;

const errors: string[] = [];
const ok: string[] = [];

function fail(message: string) {
  errors.push(message);
}

function pass(message: string) {
  ok.push(message);
}

if (items.length < 8 || items.length > 12) {
  fail(`item count ${items.length} is outside 8 to 12`);
} else {
  pass(`item count ${items.length}`);
}

const slugs = new Set(items.map((item) => item.slug));
const ways = new Set(items.map((item) => item.wayOfKnowing));
if (ways.size < 6) fail(`only ${ways.size} ways of knowing`);
else pass(`${ways.size} ways of knowing`);

const quoteSources = new Set<string>();

for (const item of items) {
  for (const field of required) {
    const value = item[field];
    const empty =
      value === undefined ||
      value === null ||
      value === "" ||
      (Array.isArray(value) && value.length === 0);
    if (empty) fail(`${item.slug} missing ${field}`);
  }
  if (item.quote) {
    const words = item.quote.text.trim().split(/\s+/).filter(Boolean);
    if (words.length > 15) {
      fail(`${item.slug} quote has ${words.length} words`);
    }
    const key = item.source;
    if (quoteSources.has(key)) {
      fail(`two quotes share source ${key}`);
    }
    quoteSources.add(key);
  }
  for (const related of item.relation ?? []) {
    if (!slugs.has(related)) fail(`${item.slug} relation ${related} missing`);
  }
  const lag = computeHindsightLag(item);
  if (!lagAllowed(item, lag)) {
    fail(`${item.slug} lag ${lag} incompatible with ${item.temporalStance}`);
  }
  if (item.thumbnail) {
    if (!item.thumbnail.alt || !item.thumbnail.credit) {
      fail(`${item.slug} thumbnail missing alt or credit`);
    }
  }
}

const longForm = [
  "src/app/page.tsx",
  "src/app/demo/page.tsx",
  "src/app/exhibit/page.tsx",
  "src/app/guide/page.tsx",
  "src/app/data-dictionary/page.tsx",
  "src/app/statement/page.tsx",
  "src/app/browse/page.tsx",
  "src/app/reading-list/page.tsx",
  "src/app/ai-use/page.tsx",
  "src/components/CorpusDemo.tsx",
  "src/components/GapReader.tsx",
  "src/components/LossAversionChart.tsx",
  "src/components/LagPlot.tsx",
  "src/components/Timeline.tsx",
];
for (const relative of longForm) {
  const file = join(root, relative);
  const text = readFileSync(file, "utf8");
  const cites = (text.match(/<Cite /g) ?? []).length;
  if (cites < 2) fail(`${relative} has ${cites} Cite tags`);
  else pass(`${relative} cites ${cites}`);
}

function walkSrc(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkSrc(path));
    else if (/\.(ts|tsx|css|md)$/.test(entry.name)) out.push(path);
  }
  return out;
}

for (const file of [
  ...walkSrc(join(root, "src")),
  join(root, "PRESENTATION.md"),
  join(root, "README.md"),
]) {
  try {
    const text = readFileSync(file, "utf8");
    if (text.includes("\u2014")) fail(`em dash in ${file}`);
  } catch {
    // README may not exist yet during first validate
  }
}

if (errors.length === 0) {
  pass("quotes, relations, dates, thumbnails, cites, em dashes");
}

const green = "\x1b[32m";
const red = "\x1b[31m";
const reset = "\x1b[0m";

console.log("\narchive validation");
console.log("------------------");
for (const row of ok) console.log(`${green}ok${reset}   ${row}`);
for (const row of errors) console.log(`${red}fail${reset} ${row}`);
console.log("------------------");
console.log(
  errors.length === 0
    ? `${green}all checks passed${reset}`
    : `${red}${errors.length} checks failed${reset}`,
);

if (errors.length > 0) process.exit(1);
