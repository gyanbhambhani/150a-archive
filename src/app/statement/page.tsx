import type { Metadata } from "next";
import { Cite } from "@/components/Cite";
import { Main } from "@/components/Main";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Statement",
};

export default function StatementPage() {
  return (
    <Main>
      <Prose as="article">
        <h1>Future development, accessibility, sunset, positionality, limits</h1>

        <h2>Future development</h2>
        <p>
          This is a proof of concept built in a six-week summer course while I
          was learning archival theory and the software at the same time.
          Twelve items is a demonstration, not a collection. Three directions
          past this phase:
        </p>
        <p>
          <em>Make the carousel keep the why.</em> After every trade, each
          model writes a short reason. The group reads those reasons and
          argues. The next training round uses the reasons as context, not
          only the leftover price. This archive is the evidence that the
          usual file is missing that field. The next artifact is the log
          itself.
        </p>
        <p>
          <em>Grow the collection.</em> Roughly 200 items across more events,
          with at least four kinds of source per event, so &quot;how late&quot;
          becomes a real distribution instead of a sketch.
        </p>
        <p>
          <em>Turn the question into a test.</em> &quot;Trained on prices
          only&quot; should be a disclosed property of a product, with a
          published rubric, not something a buyer has to guess.
        </p>

        <h2>Accessibility</h2>
        <p>Decisions made and implemented:</p>
        <ul>
          <li>
            Every distinction carried by color is also carried by typeface and
            by a text label. What a person said is Newsreader and labeled
            &quot;what a person said.&quot; What got saved is IBM Plex Mono
            and labeled &quot;what got saved.&quot; A reader who cannot
            distinguish amber from slate blue loses nothing.
          </li>
          <li>
            Contrast meets WCAG 2.1 AA at minimum across every text and
            background pair, verified rather than assumed. Ink on paper
            measures well above 7:1. The human accent token was darkened from
            the original ticket amber so body-size text on paper clears 4.5:1.
          </li>
          <li>
            The one animated element respects prefers-reduced-motion and swaps
            instantly with an aria-live announcement instead.
          </li>
          <li>
            Every visualization has a text alternative immediately below it
            that states the same finding in a sentence, plus a data table
            available to screen readers.
          </li>
          <li>
            Alt text is written as description with content, not as a label.
            Following the Alt Text as Poetry approach, image descriptions here
            try to convey what matters about the image rather than naming its
            file. <Cite id="alt-text-as-poetry" />
          </li>
          <li>
            Full keyboard operation with a visible focus ring, a skip-to-content
            link, semantic landmarks, and a logical heading hierarchy on every
            page.
          </li>
          <li>
            The site remains readable at 200 percent zoom and at 320px viewport
            width.
          </li>
          <li>
            Language is declared, the reading level of the guide is
            deliberately lower than the reading level of the exhibit, and no
            page depends on hover to reveal content.
          </li>
        </ul>
        <p>
          What I did not do: there are no translations, and the entire archive
          is English-language US markets. The Delis Negrón Digital Archive and
          the Transborder Digital Humanities work we saw this term treat
          bilingual metadata as an argument about who an archive is addressed
          to rather than as a feature added at the end.{" "}
          <Cite id="delis-negron" /> By that standard this collection has
          quietly addressed itself to English-speaking readers in the US and
          called it scope. That is a real accessibility limit and I am naming
          it here rather than filing it under future work.
        </p>

        <h2>Sunsetting</h2>
        <p>
          An archive that cannot be shut down responsibly should not be
          started. The open source sunsetting guidance we read makes the
          central point that an unmaintained project left running is worse than
          one that was closed on purpose, because users keep trusting it after
          anyone is left to fix it. <Cite id="sunsetting-oss" /> The repotting
          argument adds the other half: old digital humanities projects usually
          die from dependency rot rather than from loss of interest, which
          means the durable version of a project is the one with the fewest
          moving parts. <Cite id="repotting" /> Both shaped the technical
          choices below more than any aesthetic consideration did.
        </p>
        <p>The plan:</p>
        <p>
          <em>The site is fully static.</em> No database, no server-side
          runtime, no third-party API at request time. It can be exported to
          flat files and hosted anywhere, or hosted nowhere and still read from
          the repository. The Next.js config uses output: export for that
          reason. The event timeline is drawn in-house rather than embedded
          from a third-party iframe that would break the sunset plan.
        </p>
        <p>
          <em>The content is separable from the presentation.</em> All twelve
          records exist as metadata.csv, items.json with JSON-LD, and an Omeka
          S import CSV. If this site disappears, the archive does not. Any
          institution running Omeka S can ingest the collection in one upload.
          That export is an interoperability commitment, not a backup slogan.
        </p>
        <p>
          <em>Deposit before decay.</em> On completion the repository and the
          export bundle go to Zenodo for a DOI and to the Internet Archive for
          a crawl. The DOI is the citable object, not the domain. The guerilla
          archiving work we looked at is built on the assumption that material
          worth keeping is often captured by people with no institutional
          mandate, before anyone with a mandate notices.{" "}
          <Cite id="guerilla-archivists" /> That describes this project
          exactly, and it also describes its failure mode, so the deposit
          happens at submission rather than someday.
        </p>
        <p>
          <em>Named end conditions.</em> If the domain lapses or I stop
          maintaining it, the README in the repository contains revival
          instructions: clone, install, build, deploy, roughly ten minutes. The
          license on all original writing is CC BY-NC 4.0 so someone else can
          carry it without asking.
        </p>
        <p>
          <em>What gets deleted.</em> Nothing, because nothing was mirrored.
          The pointers may rot, and link rot is the honest failure mode of a
          link-only archive. I accept it as the cost of not copying people&apos;s
          words without asking.
        </p>

        <h2>Positionality</h2>
        <p>
          I build the systems this archive is skeptical of. I ran trading
          rules on live money using five years of prices, and I am building a
          carousel of models that are supposed to write why after each trade.
          Item eleven is my own test with no reasons saved. I included it
          because I only noticed the hole after I started this project.
        </p>
        <p>
          I am also a Berkeley undergraduate who came to archival theory six
          weeks ago through this course. My reading of Trouillot, Caswell, and
          Luiselli is a first reading. Where I have applied their arguments to
          financial data, that application is mine and they should not be
          blamed for it.
        </p>
        <p>
          Jennifer Milligan&apos;s history of what counted as an archive in
          modern France was a useful corrective on this point.{" "}
          <Cite id="milligan" /> The category is younger and more contested
          than it looks from inside, which is both permission to extend it
          toward market data and a reason to be careful about the confidence
          with which I do so.
        </p>
        <p>
          The bias this most likely produces: I find the missing why more
          interesting than the leftover number, and I have probably given the
          people in this archive more credit for reasoning than a less
          sympathetic reader would.
        </p>

        <h2>Limitations</h2>
        <p>
          Because this is a proof of concept developed over a six-week summer
          course in which I was simultaneously learning the theory and the
          practice of digital archiving, its scope is limited by design. Twelve
          items across nine ways of knowing, all English, all US markets, all
          equities and equity volatility. There is no crypto, no fixed income,
          no non-US venue, and no non-English record.
        </p>
        <p>
          The affect fields are my inference on most items, marked as such, and
          a different archivist would code them differently. The machine
          legibility score is coarse. The selection is biased toward events
          that were heavily documented, which means it inherits the
          survivorship problem it is trying to describe.
        </p>
        <p>
          None of that makes it one and done. Starting with a small set of
          well-documented US equity events lets me establish the schema against
          the easiest possible case. Once the fields hold up here, the
          collection can extend to venues where the reasoning was recorded in
          other languages and other registers, and the archive gets more
          interesting exactly where it gets harder.
        </p>
      </Prose>
    </Main>
  );
}
