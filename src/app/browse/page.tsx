import type { Metadata } from "next";
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
      </Prose>
      <div className="mt-8">
        <BrowseClient />
      </div>
    </Main>
  );
}
