import type { Metadata } from "next";
import Link from "next/link";
import { Cite } from "@/components/Cite";
import { Main } from "@/components/Main";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "How to use",
};

export default function GuidePage() {
  return (
    <Main>
      <Prose as="article">
        <h1>How to use this</h1>

        <h2>If you only remember one thing</h2>
        <p>
          Go to the start page. Press the dark button that says
          &quot;Strip the reasoning.&quot; A paragraph of why will vanish.
          Four numbers will take its place. That is the demo. The rest of the
          site is more of the same idea.
        </p>

        <h2>What this site is</h2>
        <p>
          A small archive of twelve documents from days when prices jumped.
          Some are things people said at the time. Some are things a computer
          produced later. Together they show a gap: humans trade on fear and
          reasons, and the file a model trains on usually keeps only the
          leftover number.
        </p>

        <h2>How a page works</h2>
        <p>Every item page has three parts.</p>
        <p>
          <em>The paragraph.</em> Labeled &quot;what a person said.&quot; This
          is my plain-language summary of the reason. Press the button and it
          is replaced by &quot;what got saved,&quot; which is the leftover a
          computer actually keeps. Serif type is the person. Monospace type is
          the leftover. Color is extra.
        </p>
        <p>
          <em>The button.</em> Press it once. Watch the words leave. Press it
          again to bring them back. If your computer is set to reduce motion,
          the swap is instant and a screen reader announces it.
        </p>
        <p>
          <em>The record.</em> The table underneath is the archival
          description: who made it, when, where it came from. Two dates are
          different on purpose. Date of event is when the market moved. Date
          created is when someone spoke. The gap between them is how late the
          record is. A report written 90 days later and a sentence written
          during the day belong in different drawers. Most databases file them
          under one date. I split them.
        </p>

        <h2>How to look around</h2>
        <p>
          <Link href="/browse" className="underline">
            12 items
          </Link>{" "}
          is the list. You can search, or filter by four questions:
        </p>
        <p>
          <em>When they knew.</em> Did they speak before they knew the ending,
          or after?
        </p>
        <p>
          <em>Is the why written down.</em> Stated means yes. Absent means the
          file only has the leftover. Filter to absent if you want to see what
          most models train on.
        </p>
        <p>
          <em>Would the leftover include this.</em> A score from 0 to 3. Zero
          means a price file would keep almost none of it.
        </p>
        <p>
          <em>Kind of source.</em> Report, forum post, call, and so on.
        </p>

        <h2>A five-minute path</h2>
        <p>
          Start page, GameStop button, done. If you have twenty minutes, read
          the walkthrough. Opening all twelve is optional. One day is enough.
        </p>

        <h2>A couple of limits</h2>
        <p>
          Every item links out to the original. I do not host copies. I
          explain that choice on the fields page.
        </p>
        <p>
          I will not pick a product for you. I will give you a question to ask
          before you put money in: was the why saved?
        </p>

        <h2>If something looks broken</h2>
        <p>
          The site is static files. It should work with JavaScript off, except
          for the button and the filters. Both have a text backup on the page.{" "}
          <Cite id="alt-text-as-poetry" />
        </p>

        <h2>Two projects that taught me the format</h2>
        <p>
          Queering the Map showed me that one sentence, tied to a place and a
          time, can be a complete record. <Cite id="queering-the-map" /> The
          Tenement Museum&apos;s Your Story, Our Story lets people describe
          their own objects, with the curator stepping back.{" "}
          <Cite id="tenement" /> If this archive grows, it grows that way:
          more reasons, written by the people who had them.
        </p>
      </Prose>
    </Main>
  );
}
