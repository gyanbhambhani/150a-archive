import type { Metadata } from "next";
import Link from "next/link";
import { Cite } from "@/components/Cite";
import { CorpusDemo } from "@/components/CorpusDemo";
import { Main } from "@/components/Main";
import { Prose } from "@/components/Prose";
import { HERO } from "@/content/copy";
import { getItem } from "@/content/items";
import { TAGLINE } from "@/content/plain";
import { SITE_SUBTITLE, SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_SUBTITLE,
};

export default function HomePage() {
  const demo = getItem("wsb-gme-thread");
  return (
    <Main wide>
      <Prose as="article">
        <p className="machine mb-4 text-[13px] text-ink-soft">{TAGLINE}</p>
        <h1 className="display mb-6 text-[36px] md:text-[54px] lg:text-[76px]">
          {SITE_TITLE}
        </h1>
        <p className="display mb-10 text-[27px] leading-snug md:text-[36px]">
          {HERO}
        </p>

        <h2>The point</h2>
        <p>
          I have been trying to get models to trade. You can copy a strategy
          and test it on old prices for years. I have done that. The test
          looks fine until you notice what it never saw: why anyone clicked
          buy or sell that day.
        </p>
        <p>
          People get scared. They get hopeful. They hold because their friends
          are holding. A lot of a market is just that. The file a model trains
          on usually records that a number moved. By then the scare is already
          gone.
        </p>
        <p>
          So I want the reason in the file. After a trade, write why. Feed
          that sentence back in, and the next round of models has something to
          work with besides the leftover price. They can see the trick while
          it is still named. Fear, hope, a rumor, a paragraph from a central
          bank. Labeled, sitting next to the number.
        </p>
        <p>
          I am wiring a few models together to do this in a loop. They trade,
          they write why, they read each other and argue. I call that a
          carousel. This site is twelve historical cases where the why was
          public and the file that survived is just the number. I built it for
          class, and because the carousel keeps running into that hole in my
          own data.
        </p>

        <h2>Why this matters</h2>
        <p>
          Kahneman and Tversky showed that people feel a loss about twice as
          hard as an equal win. <Cite id="prospect" /> That is a lot of why
          someone dumps a stock. A model trained only on prices has seen every
          dump in the dataset. The feeling that produced the dump was never
          written down, so there is nothing to train on except the leftover
          move.
        </p>
        <p>
          Archivists have language for this. Michel-Rolph Trouillot argued
          that silences enter a record at the moment a fact is made, before
          anyone interprets anything. <Cite id="trouillot" /> A stored price
          is a fact of that kind. Michelle Caswell says a record is produced
          under conditions, and those conditions decide what it can later
          prove. <Cite id="caswell-records" /> A price file is produced to
          clear a trade. Later you can prove the trade happened. The why was
          never asked for, so it is not there to prove.
        </p>
        <p>
          The Society of American Archivists definition of a record is
          content, plus context, plus structure. <Cite id="saa-ccs" /> A
          leftover price has content and structure. Context is the why, and
          it is the part the file never asked for.
        </p>
        <p>
          Caswell, reading Arendt, treats thoughtlessness in documentation as
          the harm itself. <Cite id="caswell-arendt" /> Prices are recorded
          that way every trading day, at a scale no archive has attempted,
          and those files now train the next round of decisions. This project
          is me putting thought back into one small set of those files.
        </p>
        <p>
          Isabel Wilkerson&apos;s method is the one I want at scale: an
          accurate number explains little until someone asks why a particular
          person moved on a particular night. <Cite id="wilkerson" /> Markets
          have almost none of that asking.
        </p>

        <h2>Who this is for</h2>
        <p>
          The public audience is anyone who might put money into a trading
          system, and anyone building one. You should care because the
          computer is being asked to act in a human market while its training
          file has never held a human reason. The question I keep coming back
          to is small. Did anyone save why the trades happened?
        </p>
        <p>
          I am also writing this into two academic conversations that mostly
          ignore each other. Digital humanities and archival studies know how
          to ask what a record threw away. They have almost never asked that
          of market data. Callaway and colleagues describe a field that keeps
          redrawing its own boundary. <Cite id="callaway" /> Market data is
          born-digital, public, and almost unclaimed by the people trained to
          appraise records. Machine learning knows how to train on a file,
          and almost never asks what got deleted on the way in. Gebru and
          colleagues argued that every dataset needs a datasheet: what is in
          it, what is missing, who made it. <Cite id="datasheets" /> Price
          files have skipped that step. This archive is my attempt at one, for
          the missing why.
        </p>
        <p>
          A public memory project like Queering the Map showed me that one
          sentence, tied to a moment, can be a complete record.{" "}
          <Cite id="queering-the-map" /> That is the form I want sitting next
          to a price.
        </p>

        <h2>What to do</h2>
        <p>
          After every trade, write why. Train on that. If you are about to put
          money into a system like this, ask whether anyone logged the
          reasons. A no still lets you take the bet. You would just be betting
          on a model that has never had fear in its training data.
        </p>
        <p>
          The rest of the site is twelve documents. The demo below is the
          whole argument in four steps.
        </p>
      </Prose>

      {demo ? (
        <section className="my-10" aria-labelledby="try-it">
          <h2 id="try-it" className="display mb-2 text-[27px]">
            The demo
          </h2>
          <p className="mb-4 max-w-[68ch] text-[15px] text-ink-soft">
            File A is leftover numbers. File B is the feeling, named, for the
            carousel. Then a sketch of how those two files trade.{" "}
            <Link href="/demo" className="underline">
              Open this on its own page
            </Link>
            .
          </p>
          <div className="hairline p-4 md:p-6">
            <CorpusDemo item={demo} />
          </div>
        </section>
      ) : null}

      <Prose as="article">
        <p className="mt-6">
          Most models train on File A. The carousel trains on File B. The{" "}
          <Link href="/exhibit" className="underline">
            walkthrough
          </Link>{" "}
          keeps going, or start with{" "}
          <Link href="/guide" className="underline">
            how to use this
          </Link>
          .
        </p>
      </Prose>
    </Main>
  );
}
