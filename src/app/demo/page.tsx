import type { Metadata } from "next";
import Link from "next/link";
import { Cite } from "@/components/Cite";
import { CorpusDemo } from "@/components/CorpusDemo";
import { Main } from "@/components/Main";
import { Prose } from "@/components/Prose";
import { EMOTION_BANK } from "@/content/emotions";
import { getItem } from "@/content/items";

export const metadata: Metadata = {
  title: "Demo",
};

export default function DemoPage() {
  const demo = getItem("wsb-gme-thread");
  return (
    <Main wide>
      <Prose as="article">
        <h1>The demo</h1>
        <p>
          News and forum posts are full of feeling. Most training files throw
          that feeling away and keep a leftover number. A model trained that
          way has never had fear in the corpus. Kahneman and Tversky measured
          how hard a loss lands. <Cite id="prospect" /> The measurement never
          makes it into the price file.
        </p>
        <p>
          The carousel I am building keeps the feeling as a label, next to the
          number. Trouillot called this kind of deletion a silence at the
          moment a fact is made. <Cite id="trouillot" /> File B is me refusing
          that silence for one paragraph.
        </p>
        <p>
          Four steps. Same GameStop paragraph. File A is numbers. File B is
          why. Then a sketch of how those two files trade.
        </p>
      </Prose>

      {demo ? (
        <section className="my-8 hairline p-4 md:p-6" aria-label="Interactive demo">
          <CorpusDemo item={demo} />
        </section>
      ) : null}

      <Prose as="article">
        <h2>The feeling bank</h2>
        <p>
          Twenty names. Short enough for a model to use as labels. I wrote
          them in ordinary language so a person can check my coding.
        </p>
      </Prose>
      <ul className="mt-4 grid gap-4 md:grid-cols-2">
        {EMOTION_BANK.map((emotion) => (
          <li key={emotion.id} className="hairline bg-paper-deep/40 p-3">
            <p className="machine text-[13px] text-human">{emotion.name}</p>
            <p className="mt-1 text-[15px]">{emotion.meaning}</p>
          </li>
        ))}
      </ul>
      <Prose as="article">
        <p className="mt-10">
          The twelve documents sit behind this.{" "}
          <Link href="/browse" className="underline">
            Open the archive
          </Link>
          , or go back to the{" "}
          <Link href="/" className="underline">
            start
          </Link>
          .
        </p>
      </Prose>
    </Main>
  );
}
