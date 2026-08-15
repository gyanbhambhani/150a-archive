import type { ArchiveItem } from "./types";

const DAY_MS = 86_400_000;

export function parseEventDate(raw: string): Date | null {
  if (!raw || raw === "not event-specific") return null;
  const start = raw.includes("/") ? raw.split("/")[0] : raw;
  const date = new Date(start);
  if (Number.isNaN(date.getTime())) return null;
  return date;
}

export function parseCreatedDate(raw: string): Date | null {
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return null;
  return date;
}

export function computeHindsightLag(item: ArchiveItem): number | null {
  const event = parseEventDate(item.dateOfEvent);
  const said = parseCreatedDate(item.dateCreated);
  if (!event || !said) return null;
  return Math.round((said.getTime() - event.getTime()) / DAY_MS);
}

export function formatLag(days: number | null): string {
  if (days === null) return "not applicable, theoretical item";
  if (days === 0) return "same day";
  if (days === 1) return "1 day after";
  if (days === -1) return "1 day before the event";
  if (days < 0) return `${Math.abs(days)} days before the event`;
  if (days < 60) return `${days} days after`;
  const years = (days / 365).toFixed(1);
  return `${days} days after, roughly ${years} years`;
}

export function lagAllowed(item: ArchiveItem, lag: number | null): boolean {
  if (lag === null) return item.temporalStance === "theoretical";
  if (lag >= 0) return true;
  return (
    item.temporalStance === "predictive" ||
    item.temporalStance === "contemporaneous"
  );
}
