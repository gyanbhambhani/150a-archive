import Fuse from "fuse.js";
import type { ArchiveItem } from "./types";

export function buildSearch(items: ArchiveItem[]): Fuse<ArchiveItem> {
  return new Fuse(items, {
    keys: [
      { name: "title", weight: 2 },
      { name: "description", weight: 1.4 },
      { name: "source", weight: 1.2 },
      { name: "creator", weight: 1 },
      { name: "subject", weight: 1 },
      { name: "humanVoice", weight: 0.8 },
    ],
    threshold: 0.38,
    ignoreLocation: true,
  });
}
