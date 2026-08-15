"use client";

import { useMemo, useState } from "react";
import { FacetBar } from "@/components/FacetBar";
import { ItemCard } from "@/components/ItemCard";
import { SearchBox } from "@/components/SearchBox";
import { MICROCOPY } from "@/content/copy";
import { items } from "@/content/items";
import {
  legibilityPlain,
  reasoningPlain,
  stancePlain,
} from "@/content/plain";
import { buildSearch } from "@/lib/search";
import type {
  ArchiveItem,
  ReasoningPresence,
  TemporalStance,
  WayOfKnowing,
} from "@/lib/types";

const stances: TemporalStance[] = [
  "contemporaneous",
  "predictive",
  "retrospective",
  "theoretical",
];
const reasoning: ReasoningPresence[] = ["stated", "inferred", "absent"];
const ways = Array.from(
  new Set(items.map((item) => item.wayOfKnowing)),
).sort() as WayOfKnowing[];
const legs = ["0", "1", "2", "3"];

export function BrowseClient() {
  const fuse = useMemo(() => buildSearch(items), []);
  const [query, setQuery] = useState("");
  const [stance, setStance] = useState("");
  const [reason, setReason] = useState("");
  const [legibility, setLegibility] = useState("");
  const [way, setWay] = useState("");

  const filtered = useMemo(() => {
    const base: ArchiveItem[] = query
      ? fuse.search(query).map((result) => result.item)
      : items;
    return base.filter((item) => {
      if (stance && item.temporalStance !== stance) return false;
      if (reason && item.reasoningPresence !== reason) return false;
      if (legibility && String(item.machineLegibility) !== legibility) {
        return false;
      }
      if (way && item.wayOfKnowing !== way) return false;
      return true;
    });
  }, [fuse, query, stance, reason, legibility, way]);

  const clear = () => {
    setQuery("");
    setStance("");
    setReason("");
    setLegibility("");
    setWay("");
  };

  return (
    <div>
      <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-3">
          <SearchBox value={query} onChange={setQuery} />
        </div>
        <FacetBar
          label="When they knew"
          value={stance}
          options={stances.map((value) => ({
            value,
            label: stancePlain[value],
          }))}
          onChange={setStance}
        />
        <FacetBar
          label="Is the why written down"
          value={reason}
          options={reasoning.map((value) => ({
            value,
            label: reasoningPlain[value],
          }))}
          onChange={setReason}
        />
        <FacetBar
          label="Would the leftover include this"
          value={legibility}
          options={legs.map((value) => ({
            value,
            label: `${value}: ${legibilityPlain[Number(value) as 0 | 1 | 2 | 3]}`,
          }))}
          onChange={setLegibility}
        />
        <FacetBar
          label="Kind of source"
          value={way}
          options={ways.map((value) => ({ value, label: value }))}
          onChange={setWay}
        />
      </div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="machine text-[13px] text-ink-soft" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "item" : "items"}
        </p>
        <button
          type="button"
          onClick={clear}
          className="rounded-[2px] border border-rule px-3 py-1.5 text-[15px]"
        >
          {MICROCOPY.filterReset}
        </button>
      </div>
      {filtered.length === 0 ? (
        <p>{MICROCOPY.browseEmpty}</p>
      ) : (
        <ul className="grid gap-4">
          {filtered.map((item) => (
            <li key={item.slug}>
              <ItemCard item={item} />
            </li>
          ))}
        </ul>
      )}
      <noscript>
        <ul className="mt-6 grid gap-4">
          {items.map((item) => (
            <li key={`static-${item.slug}`}>
              <ItemCard item={item} />
            </li>
          ))}
        </ul>
      </noscript>
    </div>
  );
}
