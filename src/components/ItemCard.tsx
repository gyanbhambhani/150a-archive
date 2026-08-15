import Link from "next/link";
import { FieldBadge } from "@/components/FieldBadge";
import { ArrowIcon } from "@/components/Icons";
import { MICROCOPY } from "@/content/copy";
import { briefings, reasoningPlain, stancePlain } from "@/content/plain";
import { computeHindsightLag, formatLag } from "@/lib/lag";
import type { ArchiveItem } from "@/lib/types";

export function ItemCard({ item }: { item: ArchiveItem }) {
  const lag = computeHindsightLag(item);
  const brief = briefings[item.slug];
  return (
    <article className="hairline bg-paper-deep/40 p-4">
      <p className="machine mb-2 text-[13px] text-ink-soft">
        {item.wayOfKnowing}
      </p>
      <h2 className="display mb-2 text-[21px] leading-snug">
        <Link href={`/items/${item.slug}`} className="text-ink no-underline">
          {item.title}
        </Link>
      </h2>
      <p className="mb-3 text-[17px]">{brief?.event ?? item.description}</p>
      <p className="machine mb-3 text-[13px]">
        {MICROCOPY.lagLabel}: {formatLag(lag)}
      </p>
      <div className="mb-3 flex flex-wrap gap-2">
        <FieldBadge
          label="when"
          value={stancePlain[item.temporalStance]}
        />
        <FieldBadge
          label="why"
          value={reasoningPlain[item.reasoningPresence]}
        />
      </div>
      <Link
        href={`/items/${item.slug}`}
        className="inline-flex items-center gap-2 text-[15px] text-human no-underline"
      >
        Open record
        <ArrowIcon />
      </Link>
    </article>
  );
}
