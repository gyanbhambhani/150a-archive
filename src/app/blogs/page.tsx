import type { Metadata } from "next";
import Link from "next/link";
import { Cite } from "@/components/Cite";
import { Main } from "@/components/Main";
import { Prose } from "@/components/Prose";
import { blogs } from "@/content/blogs";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogsPage() {
  return (
    <Main>
      <Prose as="article">
        <h1>Blogs</h1>
        <p>
          The assignment said the final project could pull from the course
          blogs. These three are how the argument formed. Week 1 is why
          archives exist. Week 2 is the turn toward feeling, and toward this
          site. Week 4 is me sitting outside my own machine.
        </p>
        <p>
          Milligan showed me that what gets kept, and who decides, shapes what
          a culture is allowed to remember. <Cite id="milligan" /> Callaway
          showed me that even the field cannot agree on its own edge.{" "}
          <Cite id="callaway" /> Both of those questions are still running
          underneath the twelve items.
        </p>
        <p>
          I am putting up the three posts I still have: weeks 1, 2, and 4. The
          figures are the ones from the original posts.
        </p>
      </Prose>
      <ol className="mt-10 grid gap-6">
        {blogs.map((blog) => (
          <li key={blog.slug} className="hairline bg-paper-deep/40 p-4">
            <p className="machine mb-2 text-[13px] text-ink-soft">
              Blog week {blog.week}
            </p>
            <h2 className="display mb-2 text-[21px] leading-snug">
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-ink no-underline"
              >
                {blog.title}
              </Link>
            </h2>
            <p className="mb-3 text-[15px] text-ink-soft">{blog.subtitle}</p>
            <p className="mb-4 max-w-[68ch]">{blog.dek}</p>
            <Link href={`/blogs/${blog.slug}`} className="underline">
              Read the post
            </Link>
          </li>
        ))}
      </ol>
    </Main>
  );
}
