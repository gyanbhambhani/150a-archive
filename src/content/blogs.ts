export interface BlogMeta {
  slug: string;
  week: number;
  title: string;
  subtitle: string;
  dek: string;
}

export const blogs: BlogMeta[] = [
  {
    slug: "why-we-archive",
    week: 1,
    title: "Why we archive",
    subtitle: "Blog week 1, DigHum 150A",
    dek: "Preserving meaning is the work. Callaway and Milligan are the two readings that made that feel like a real question instead of a slogan.",
  },
  {
    slug: "everything-the-candle-ate",
    week: 2,
    title: "Everything the candle ate",
    subtitle:
      "Why I am grounding a market archive in emotion, when the record was built to strip it out",
    dek: "My worst trade came back as five numbers. The feeling that produced it was already gone. This is the post where the archive starts.",
  },
  {
    slug: "the-man-inside-the-cabinet",
    week: 4,
    title: "The man inside the cabinet",
    subtitle: "What 9 years of trading taught me about building a machine that trades without me",
    dek: "I wrote the system, and I still cannot see inside it. Poe taught me to read the surface. Boyd and Crawford taught me not to trust a pretty number.",
  },
];

export function getBlog(slug: string): BlogMeta | undefined {
  return blogs.find((blog) => blog.slug === slug);
}
