import type { MetadataRoute } from "next";
import { items } from "@/content/items";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/exhibit",
    "/browse",
    "/guide",
    "/data-dictionary",
    "/reading-list",
    "/statement",
    "/ai-use",
  ];
  const now = new Date("2026-08-15");
  return [
    ...pages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
    })),
    ...items.map((item) => ({
      url: `${SITE_URL}/items/${item.slug}`,
      lastModified: now,
    })),
  ];
}
