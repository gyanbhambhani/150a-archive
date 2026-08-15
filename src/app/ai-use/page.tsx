import type { Metadata } from "next";
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
        <p>Two disclosures, per the course policy.</p>
        <h2>Item 12 is machine-generated on purpose.</h2>
        <p>
          I prompted a large language model to explain a market event from
          March 2020 and archived the output as an artifact, along with the
          exact prompt, the model version, and the generation timestamp. The
          item exists to be examined, not to be believed. Its metadata records
          reasoningPresence: absent and a hindsight lag of roughly 2,340 days.
          This is the one case where the assignment&apos;s own carve-out
          applies directly: the project is partly about distinguishing a real
          record from a fluent reconstruction, so it needs one fluent
          reconstruction in the collection.
        </p>
        <h2>The site was built with an AI coding assistant.</h2>
        <p>
          The argument is mine: humans trade on fear, models train on numbers,
          and the why has to be logged if you want a model that does not fall
          for the same tricks. The item selection and the metadata schema are
          mine. A coding assistant drafted the pages from that claim and built
          the interface. I am responsible for every sentence that shipped.
        </p>
        <p>
          Everything else in the archive is a human record, pointed at rather
          than reproduced.
        </p>
      </Prose>
    </Main>
  );
}
