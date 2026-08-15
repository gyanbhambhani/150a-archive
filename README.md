# Keep the why

Humans trade on fear. Models train on numbers. This archive shows the
gap.

DigHum 150A, UC Berkeley, Summer D 2026. Gyan Bhambhani.

Live URL: set `NEXT_PUBLIC_SITE_URL` before deploy, then record the
Vercel URL here after first production push.

## Revival (sunset plan)

This site is static. No database, no CMS, no request-time APIs.
To bring it back up:

1. Clone the repository.
2. `npm install`
3. `npm run build`
4. Deploy the `out/` directory to any static host, or run
   `npx vercel --prod`.

That is roughly ten minutes. Original writing is CC BY-NC 4.0.

## Local

```bash
npm install
npm run validate
npm run dev
```

`npm run validate` encodes the rubric: item count, DCMI fields, quote
caps, relation integrity, lag rules, Cite coverage, and em dash scan.

## Exports

Build writes:

- `public/exports/items.json`
- `public/exports/metadata.csv`
- `public/exports/omeka-import.csv`

The Omeka CSV maps custom `mkt:` fields into `dcterms:description`
qualifiers. That loss is documented in the data dictionary.

## Stack

Next.js 15 (App Router), TypeScript, Tailwind v4. `output: "export"`.
