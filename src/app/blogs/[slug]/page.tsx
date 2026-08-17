import type { Metadata } from "next";
import type { JSX } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  EverythingTheCandleAte,
  ManInsideTheCabinet,
  WhyWeArchive,
} from "@/components/blog-posts";
import { Main } from "@/components/Main";
import { blogs, getBlog } from "@/content/blogs";

type Params = { slug: string };

const bodies: Record<string, () => JSX.Element> = {
  "why-we-archive": WhyWeArchive,
  "the-man-inside-the-cabinet": ManInsideTheCabinet,
  "everything-the-candle-ate": EverythingTheCandleAte,
};

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const blog = getBlog(slug);
    if (!blog) return { title: "Missing post" };
    return {
      title: blog.title,
      description: blog.dek,
    };
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const blog = getBlog(slug);
  const Body = bodies[slug];
  if (!blog || !Body) notFound();
  const index = blogs.findIndex((entry) => entry.slug === slug);
  const previous = index > 0 ? blogs[index - 1] : undefined;
  const next = index < blogs.length - 1 ? blogs[index + 1] : undefined;

  return (
    <Main>
      <Body />
      <nav
        className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-[15px]"
        aria-label="Blog posts"
      >
        <Link href="/blogs" className="underline">
          All blogs
        </Link>
        {previous ? (
          <Link href={`/blogs/${previous.slug}`} className="underline">
            Previous: {previous.title}
          </Link>
        ) : null}
        {next ? (
          <Link href={`/blogs/${next.slug}`} className="underline">
            Next: {next.title}
          </Link>
        ) : null}
      </nav>
    </Main>
  );
}
