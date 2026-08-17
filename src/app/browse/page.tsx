import type { Metadata } from "next";
import { Cite } from "@/components/Cite";
import { BrowseClient } from "@/components/BrowseClient";
import { Main } from "@/components/Main";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "12 items",
};

export default function BrowsePage() {
  return (
    <Main wide>
      <Prose>
        <h1>The twelve items</h1>
        <p>
          Each item is one document from a day when prices jumped because
          people felt something. A report, a call, a forum thread, a legal
          notice, a public paragraph, a test I ran, or a model completion.
          Start with GameStop. The rest repeat the same gap.
        </p>
        <p>
          Trouillot&apos;s first silence is the leftover number: the fact that
          got made. <Cite id="trouillot" /> Baca&apos;s point is that every
          field you decline to create is a question a future user cannot ask.{" "}
          <Cite id="baca" /> The filters below are those questions: whether
          the why was written down, and how late the document arrived.
        </p>
        <p>
          Smith&apos;s District Six cookbook treated recipes as records
          because that is where memory was being kept.{" "}
          <Cite id="smith-district-six" /> I am treating a trading forum the
          same way, at a much smaller scale of harm. A vernacular post still
          counts as a document here.
        </p>
        <p>
          The same twelve records ship as an Omeka S import file, linked in
          the footer, so the collection can live in the platform the course
          asked for even though this exhibit is a site of its own.
        </p>
      </Prose>
      <div className="mt-8">
        <BrowseClient />
      </div>
    </Main>
  );
}
