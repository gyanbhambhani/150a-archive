"use client";

import { MICROCOPY } from "@/content/copy";

export function SearchBox({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="machine mb-1 block text-[13px] text-ink-soft">
        Search
      </span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={MICROCOPY.searchPlaceholder}
        className="w-full rounded-[2px] border border-rule bg-paper px-3 py-2 text-[15px] text-ink"
      />
    </label>
  );
}
