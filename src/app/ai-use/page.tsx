import type { Metadata } from "next";
import { Cite } from "@/components/Cite";
import { Main } from "@/components/Main";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "How AI was used",
};

export default function AiUsePage() {
  return (
    <Main>
      <Prose as="article">
        <h1>How AI was used in this project</h1>
        <h2>Item 12 is machine-generated on purpose.</h2>
        <p>
          I prompted a large language model to explain a market event from
          March 2020 and archived the output as an artifact, along with the
          exact prompt, the model version, and the generation timestamp. The
          item exists to be examined, not to be believed. Its metadata records
          reasoningPresence: absent and a hindsight lag of roughly 2,340 days.
          Bender and colleagues describe fluent text with no grounding in the
          moment the text describes. <Cite id="parrots" /> Item 12 is that
          failure, kept on purpose.
        </p>
        <p>
          Gebru and colleagues argued that a dataset needs a datasheet: what
          is in it, what is missing, who made it. <Cite id="datasheets" />{" "}
          This page is that disclosure for the one machine-written item. The
          assignment&apos;s own carve-out applies directly here: the project
          is partly about distinguishing a real record from a fluent
          reconstruction, so it needs one fluent reconstruction in the
          collection.
        </p>
      </Prose>
    </Main>
  );
}
