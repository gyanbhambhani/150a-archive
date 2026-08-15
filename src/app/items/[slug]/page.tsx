import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Briefing } from "@/components/Briefing";
import { FieldBadge } from "@/components/FieldBadge";
import { GapReader } from "@/components/GapReader";
import { ItemRecord } from "@/components/ItemRecord";
import { Main } from "@/components/Main";
import { MICROCOPY } from "@/content/copy";
import { getItem, getRelated, items } from "@/content/items";
import {
  attributionPlain,
  affectPlain,
  legibilityPlain,
  reasoningPlain,
  stancePlain,
} from "@/content/plain";
import { itemJsonLd } from "@/lib/jsonld";
import { computeHindsightLag, formatLag } from "@/lib/lag";

type Params = { slug: string };

export function generateStaticParams() {
  return items.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const item = getItem(slug);
    if (!item) return { title: "Missing item" };
    return {
      title: item.title,
      description: item.description,
    };
  });
}

export default async function ItemPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) notFound();
  const lag = computeHindsightLag(item);
  const related = getRelated(item);
  const jsonLd = itemJsonLd(item);

  return (
    <Main wide>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="machine mb-2 text-[13px] text-ink-soft">
        {item.wayOfKnowing}
      </p>
      <h1 className="display mb-4 max-w-4xl text-[36px] md:text-[54px]">
        {item.title}
      </h1>
      <Briefing slug={item.slug} />
      <div className="hairline mb-10 p-4 md:p-6">
        <GapReader item={item} />
      </div>
      <p className="mb-6 max-w-[68ch] text-[17px]">{item.description}</p>
      <p className="mb-8">
        <span className="machine mr-3 text-[13px] text-ink-soft">
          {MICROCOPY.lagLabel}
        </span>
        <span className="machine text-[27px] text-ink">{formatLag(lag)}</span>
      </p>
      <div className="mb-6 flex flex-wrap gap-2">
        <FieldBadge
          label="when"
          value={stancePlain[item.temporalStance]}
        />
        <FieldBadge
          label="why"
          value={reasoningPlain[item.reasoningPresence]}
        />
        <FieldBadge
          label="leftover"
          value={legibilityPlain[item.machineLegibility]}
        />
        <FieldBadge
          label="affect"
          value={item.affectiveRegister.map((a) => affectPlain[a]).join(", ")}
        />
        <FieldBadge
          label="who coded affect"
          value={attributionPlain[item.affectAttribution]}
        />
      </div>
      {item.thumbnail ? (
        <figure className="mb-8 max-w-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.thumbnail.src}
            alt={item.thumbnail.alt}
            className="w-full border border-rule"
          />
          <figcaption className="mt-2 text-[13px] text-ink-soft">
            {item.thumbnail.credit}
          </figcaption>
        </figure>
      ) : null}
      {item.quote ? (
        <blockquote className="display mb-10 max-w-[68ch] border-l border-human pl-4 text-[21px]">
          <p>{item.quote.text}</p>
          <footer className="mt-2 font-[family-name:var(--font-plex-sans)] text-[15px] text-ink-soft">
            {item.quote.attribution}
          </footer>
        </blockquote>
      ) : null}
      {item.prompt ? (
        <section className="mb-10 max-w-[68ch]" aria-labelledby="prov">
          <h2 id="prov" className="display mb-3 text-[27px]">
            Generation provenance
          </h2>
          <p className="mb-2 text-[15px] text-ink-soft">
            Datasheet-style fields for the model-generated item. The prompt,
            model, and timestamp are the record.
          </p>
          <dl className="data-table">
            <div className="contents">
              <dt className="machine py-2 text-[13px] text-ink-soft">
                Model
              </dt>
              <dd className="machine py-2">{item.modelVersion}</dd>
            </div>
            <div className="contents">
              <dt className="machine py-2 text-[13px] text-ink-soft">
                Generated
              </dt>
              <dd className="machine py-2">{item.generatedAt}</dd>
            </div>
          </dl>
          <h3 className="display mt-4 text-[21px]">Prompt</h3>
          <pre className="machine mt-2 whitespace-pre-wrap text-[15px]">
            {item.prompt}
          </pre>
          <h3 className="display mt-4 text-[21px]">Completion</h3>
          <pre className="machine mt-2 whitespace-pre-wrap text-[15px]">
            {item.machineOutput}
          </pre>
        </section>
      ) : null}
      <ItemRecord item={item} />
      {related.length > 0 ? (
        <section className="mt-10" aria-labelledby="related-heading">
          <h2 id="related-heading" className="display mb-3 text-[27px]">
            In conversation with
          </h2>
          <ul>
            {related.map((entry) => (
              <li key={entry.slug}>
                <Link href={`/items/${entry.slug}`} className="underline">
                  {entry.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </Main>
  );
}
