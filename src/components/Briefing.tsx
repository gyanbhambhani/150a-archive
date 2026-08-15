import { briefings } from "@/content/plain";

export function Briefing({ slug }: { slug: string }) {
  const row = briefings[slug];
  if (!row) return null;
  return (
    <section className="hairline mb-8 bg-paper-deep/50 p-4" aria-label="In plain language">
      <p className="machine mb-3 text-[13px] text-ink-soft">in plain language</p>
      <dl className="grid gap-3">
        <div>
          <dt className="machine text-[13px] text-ink-soft">The event</dt>
          <dd className="text-[17px]">{row.event}</dd>
        </div>
        <div>
          <dt className="machine text-[13px] text-human">What a person said</dt>
          <dd className="display text-[21px] leading-snug">{row.said}</dd>
        </div>
        <div>
          <dt className="machine text-[13px] text-machine">What got saved</dt>
          <dd className="machine text-[15px] text-machine">{row.tape}</dd>
        </div>
      </dl>
    </section>
  );
}
