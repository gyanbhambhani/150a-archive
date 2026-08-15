import Link from "next/link";
import { Cite } from "@/components/Cite";
import { items } from "@/content/items";

const events = [
  {
    date: "1987-10-19",
    label: "Black Monday",
    slugs: ["brady-report"],
  },
  {
    date: "2007-08-09",
    label: "Model-driven funds lose money",
    slugs: ["viniar-25-sigma"],
  },
  {
    date: "2008-09-15",
    label: "Lehman bankruptcy",
    slugs: ["lehman-q2-call"],
  },
  {
    date: "2010-05-06",
    label: "Sudden drop, then recovery",
    slugs: ["flash-crash-report"],
  },
  {
    date: "2018-02-05",
    label: "A product is shut after collapsing",
    slugs: ["xiv-termination"],
  },
  {
    date: "2020-03-16",
    label: "Worst US stock day since 1987",
    slugs: ["fomc-emergency-2020", "llm-retrospective-2026"],
  },
  {
    date: "2021-01-28",
    label: "GameStop surge",
    slugs: ["wsb-gme-thread", "robinhood-restriction"],
  },
  {
    date: "2024-08-05",
    label: "Japanese market drop",
    slugs: ["boj-uchida-2024"],
  },
];

export function Timeline() {
  return (
    <figure>
      <ol className="relative border-l border-rule pl-6">
        {events.map((event) => (
          <li key={event.date} className="mb-6">
            <span
              className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-[2px] bg-ink"
              aria-hidden="true"
            />
            <p className="machine text-[13px] text-ink-soft">{event.date}</p>
            <p className="display text-[21px]">{event.label}</p>
            <ul className="mt-1 text-[15px]">
              {event.slugs.map((slug) => {
                const item = items.find((entry) => entry.slug === slug);
                if (!item) return null;
                return (
                  <li key={slug}>
                    <Link href={`/items/${slug}`} className="underline">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ol>
      <figcaption className="vis-caption">
        Each node is a market event. The records about it sit underneath, and
        they do not all arrive at the same time. The Wakasa Memorial
        Committee&apos;s timeline was the model here, <Cite id="wakasa" /> in
        that it keeps the distance between an event and its documentation
        visible instead of smoothing the two together.
      </figcaption>
    </figure>
  );
}
