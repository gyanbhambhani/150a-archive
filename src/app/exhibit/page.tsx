import type { Metadata } from "next";
import Link from "next/link";
import { Cite } from "@/components/Cite";
import { GapReader } from "@/components/GapReader";
import { LagPlot } from "@/components/LagPlot";
import { LossAversionChart } from "@/components/LossAversionChart";
import { Main } from "@/components/Main";
import { Prose } from "@/components/Prose";
import { Take } from "@/components/Take";
import { Timeline } from "@/components/Timeline";
import { getItem, items } from "@/content/items";
import type { ArchiveItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "Walkthrough",
};

function ItemLink({ slug }: { slug: string }) {
  const item = getItem(slug);
  if (!item) return null;
  return (
    <Link href={`/items/${slug}`} className="underline">
      {item.title}
    </Link>
  );
}

function requireItem(slug: string): ArchiveItem {
  const item = getItem(slug);
  if (!item) throw new Error(`Missing item ${slug}`);
  return item;
}

const institutional = [
  "brady-report",
  "flash-crash-report",
  "xiv-termination",
].map(requireItem);

export default function ExhibitPage() {
  return (
    <Main wide>
      <h1 className="display mb-4 text-[36px] md:text-[54px]">Walkthrough</h1>
      <p className="mb-12 max-w-[68ch] text-[17px]">
        Five short acts. People felt something, and a file kept a number. If
        you only do one thing, press the button in Act III.
      </p>

      <section className="mb-16" aria-labelledby="act-1">
        <Prose>
          <h2 id="act-1">Act I. Fear moves the number</h2>
          <Take>
            People feel a loss about twice as hard as an equal win. That
            feeling is a lot of why prices jump.
          </Take>
          <p className="text-[15px] text-ink-soft">
            Items in conversation: <ItemLink slug="prospect-theory" />,{" "}
            <ItemLink slug="fomc-emergency-2020" />,{" "}
            <ItemLink slug="boj-uchida-2024" />
          </p>
          <p>
            Humans treat a loss as bigger than a win of the same size.
            Kahneman and Tversky measured that. <Cite id="prospect" /> A
            model looking at a percent change has no access to the
            measurement. The percent is all it gets.
          </p>
          <p>
            Two public statements sit next to that, from March 2020 and August
            2024. A central bank wrote a paragraph meant to change how people
            felt about the next day. Markets moved. The cause was language.
            The price file kept the move and dropped the sentence.
          </p>
          <p>
            Valeria Luiselli wrote about a form of forty questions that takes a
            person&apos;s reasons and returns a category. <Cite id="luiselli" />{" "}
            Whatever does not fit a field disappears for every process after.
            I know a border form and a stock price live in different worlds. I
            am borrowing the shape of the form: a handful of boxes, and the
            feeling falls outside them.
          </p>
        </Prose>
        <div className="mt-8">
          <LossAversionChart />
        </div>
      </section>

      <section className="mb-16" aria-labelledby="act-2">
        <Prose>
          <h2 id="act-2">Act II. The leftover is what gets trained on</h2>
          <Take>
            Official reports arrive late. They name a machine. A person&apos;s
            fear does not make it into the document.
          </Take>
          <p className="text-[15px] text-ink-soft">
            Items in conversation: <ItemLink slug="brady-report" />,{" "}
            <ItemLink slug="flash-crash-report" />,{" "}
            <ItemLink slug="xiv-termination" />
          </p>
          <p>
            Three official documents. A 1987 crash report, about 90 days late.
            A 2010 report, 147 days late. A 2018 legal notice, next morning,
            and the emptiest of the three, because it only had to say a
            product was shut.
          </p>
          <p>
            Each one is accurate. None of them contains a person&apos;s reason
            for selling. Train a model on the leftover prices from those days
            and you are training it on the sell orders. The fear that produced
            the orders is gone.
          </p>
          <p>
            Trouillot&apos;s first silence is here: the fact gets made as a
            number, and the feeling never becomes a fact.{" "}
            <Cite id="trouillot" /> Archivists usually decide, on purpose, what
            to keep. <Cite id="peel-appraisal" /> Nobody sat down and decided
            this. The file was built to hold a number, so it holds one.
          </p>
          <p>
            Courpasson and Marti describe groups writing their own record when
            they know the official one will flatten them.{" "}
            <Cite id="courpasson-marti" /> The Warsaw Ghetto and a retail
            trading forum are not on the same scale, and nothing here
            suggests otherwise. The shape I am taking is only this: the
            official leftover is thin, so I kept the unofficial sentences
            too.
          </p>
        </Prose>
        <div className="mt-8">
          <LagPlot items={institutional} />
        </div>
      </section>

      <section className="mb-16" aria-labelledby="act-3">
        <Prose>
          <h2 id="act-3">Act III. Watch the why leave</h2>
          <Take>
            Press the button. A paragraph of reasons becomes four numbers.
            That is the training file.
          </Take>
          <p className="text-[15px] text-ink-soft">
            Items in conversation: <ItemLink slug="wsb-gme-thread" />,{" "}
            <ItemLink slug="viniar-25-sigma" />,{" "}
            <ItemLink slug="lehman-q2-call" />
          </p>
          <p>
            The reasons were said out loud. A Goldman finance chief, in 2007,
            said his models were seeing moves they had treated as almost
            impossible. Lehman&apos;s managers, in 2008, said the money story
            was fine, three months before the firm was gone. People on a forum,
            in 2021, wrote why they would not sell GameStop while the day was
            still open.
          </p>
          <p>
            A price file stores what happened. A wrong forecast, spoken before
            the ending, has nowhere to go in that format. Train only on prices
            and you get a world where nobody was ever wrong, because the
            wrongness was cleaned up before the number was written.
          </p>
          <p>
            Stay with GameStop. Press the button. Murtha Baca says every field
            you decline to create is a question a future user cannot ask.{" "}
            <Cite id="baca" /> I made a button that shows one of those
            declined fields disappearing.
          </p>
        </Prose>
        <div className="mt-8 grid gap-10">
          <div className="hairline p-4 md:p-6">
            <GapReader item={requireItem("wsb-gme-thread")} mode="gallery" />
          </div>
          <p className="max-w-[68ch] text-[15px] text-ink-soft">
            Every item page has this control. You do not need all twelve.{" "}
            <Link href="/browse" className="underline">
              The rest are on the 12 items page.
            </Link>
          </p>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="act-4">
        <Prose>
          <h2 id="act-4">Act IV. Two dates</h2>
          <Take>
            A report written 90 days later and a sentence written while the
            day was still open belong in different drawers.
          </Take>
          <p>
            Most databases file both under one date. I split them. Date of
            event is when the market moved. Date created is when someone spoke.
            The days between them are how late the record is. A model that
            trains on prices has no field for that. A panic and a later
            explanation land in the same pile.
          </p>
          <p>
            The National Archives asks whether a record&apos;s original form
            carries meaning a copy would lose. <Cite id="intrinsic-value" /> A
            person&apos;s reason, spoken before they knew the ending, is that
            kind of form. Copying it into a leftover number is how the meaning
            leaves.
          </p>
          <p>
            Brückner and Isenstadt write about evidence that does not arrive
            in document form, and that the discipline has no slot for.{" "}
            <Cite id="bruckner-isenstadt" /> Fear is that kind of evidence
            here. It moved the price. It has no accession number of its own,
            unless someone writes it down.
          </p>
        </Prose>
      </section>

      <section className="mb-16" aria-labelledby="act-5">
        <Prose>
          <h2 id="act-5">Act V. I did not save why either</h2>
          <Take>
            I tested my own rules on five years of prices and logged no
            reasons. I also asked a language model to explain March 2020, six
            years late. Both items are under my name on purpose.
          </Take>
          <p className="text-[15px] text-ink-soft">
            Items in conversation: <ItemLink slug="tickeriq-backtest" />,{" "}
            <ItemLink slug="llm-retrospective-2026" />
          </p>
          <p>
            The carousel I am building needs a why next to every trade. Item
            eleven is me failing that test. I saved how the rules performed. I
            did not save why any trade was made. There is no fear in that
            file, so a group of models has nothing of that kind to learn.
          </p>
          <p>
            Item twelve is the other failure. I asked a language model why
            stocks fell in March 2020. It wrote a fluent paragraph 2,340 days
            later. Bender and colleagues describe the general form: coherent
            text with no grounding in the moment the text describes.{" "}
            <Cite id="parrots" /> I archived it as a late story. I would not
            feed it to a carousel as if someone had been in the room.
          </p>
          <p>
            I build these systems. Leaving my own empty files out of the
            archive would make the argument dishonest. Eira Tansey argues that
            archival work depends on knowledge that is usually invisible to the
            people who benefit from it. <Cite id="tansey" /> I only know what
            a performance log leaves out because I wrote one.
          </p>
          <p>
            After every trade, write why. Let the models argue about those
            sentences. Leftover prices by themselves are a thin thing to call
            human-level.
          </p>
          <p>
            <Link href="/browse" className="underline">
              Browse all twelve items.
            </Link>
          </p>
        </Prose>
      </section>

      <section aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="display mb-4 text-[27px]">
          Event timeline
        </h2>
        <p className="mb-6 max-w-[68ch] text-[15px] text-ink-soft">
          Twelve documents, nine days. The feeling and the leftover arrive on
          different clocks.
        </p>
        <Timeline />
      </section>

      <section className="mt-16" aria-labelledby="full-lag">
        <h2 id="full-lag" className="display mb-4 text-[27px]">
          How late each record was written
        </h2>
        <LagPlot
          items={items.filter((item) => item.temporalStance !== "theoretical")}
        />
        <p className="mt-4 max-w-[68ch] text-[15px] text-ink-soft">
          Prospect theory sits off this axis, since it is not tied to one day:{" "}
          <ItemLink slug="prospect-theory" />.
        </p>
      </section>
    </Main>
  );
}
