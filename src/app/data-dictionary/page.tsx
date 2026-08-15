import type { Metadata } from "next";
import { Cite } from "@/components/Cite";
import { Main } from "@/components/Main";
import { Prose } from "@/components/Prose";
import { dictionaryFields } from "@/content/dictionary";
import { items } from "@/content/items";

export const metadata: Metadata = {
  title: "Fields",
};

export default function DictionaryPage() {
  const theoretical = items.filter(
    (item) => item.temporalStance === "theoretical",
  );
  return (
    <Main>
      <Prose as="article">
        <h1>The fields that make the argument</h1>
        <p>
          A model that trains on prices never sees two things this archive
          treats as fields: whether the why is in the document, and how late
          the document was written. Those are the interventions. The rest is
          ordinary credit: who made it, when, where it came from.
        </p>
        <p>
          Metadata is where the argument of an archive actually lives. Murtha
          Baca sets out its primary functions plainly: metadata makes objects
          findable, tells you what they are, records where they came from, and
          keeps them usable after the people who made them are gone.{" "}
          <Cite id="baca" /> Every one of those functions is a decision about
          what a future user will be able to ask. The schema below tries to
          make a few of those decisions visible by putting them in fields
          instead of burying them in prose.
        </p>
        <p>
          The Society of American Archivists definition of value is the one I
          kept coming back to. <Cite id="saa-value" /> Value in archives is not
          a property an object has. It is an assessment somebody makes, and the
          assessment determines whether the thing survives. Price data has been
          assessed as valuable by an entire industry for a century. The
          reasoning behind it has never been assessed at all, which is
          different from being assessed and rejected.
        </p>
        <p>
          This archive uses DCMI Metadata Terms as its base vocabulary, because
          that is the interoperability standard that Omeka S, most
          institutional repositories, and most harvesters expect. Where DCMI
          carried the field, I used DCMI. Where the argument needed a field
          DCMI does not have, I extended with a local mkt: namespace and
          documented it here. I am not describing every field. I am describing
          the six that make an argument.
        </p>
        <p>
          Omeka S enforces flat Dublin Core. The distance in days between when
          a market event happened and when the statement about it was made is
          not a default Omeka field. In Omeka you would bury that in
          dcterms:description as prose, which makes it unsearchable and
          unplottable. Building the archive natively lets the argument live in
          the schema. The Omeka import CSV still ships, with the mkt: fields
          folded into description qualifiers and the loss disclosed.
        </p>

        <h2>The two dates, and the field between them</h2>
        <p>
          DCMI gives one obvious date property and several less obvious ones.
          Most archives collapse everything into a single date and lose the
          distinction between when a thing happened and when it was described.
        </p>
        <ul>
          <li>dcterms:temporal holds the date of the market event.</li>
          <li>dcterms:created holds the date the statement was made.</li>
          <li>
            mkt:hindsightLag is derived, never authored, and equals the second
            minus the first in days.
          </li>
        </ul>
        <p>
          This is the intervention. A federal report explaining a crash three
          months later and a forum post written during the crash are not the
          same kind of evidence, and a schema that files them under one date
          field says they are. Making the lag a first-class, sortable,
          plottable field means the reader can see the shape of hindsight
          across the whole collection without reading a word of my
          interpretation.
        </p>
        <p>
          Every backtest has a large positive lag by construction. Every
          model-generated explanation has an enormous one. This is not a
          criticism of backtests. It is a property of them that the standard
          schema hides.
        </p>

        <h2>mkt:temporalStance</h2>
        <p>
          contemporaneous / predictive / retrospective / theoretical. Where
          hindsight lag is quantitative, stance is categorical, and it captures
          something lag cannot: whether the speaker knew the ending. A
          statement made one day after an event by someone who had not yet seen
          the resolution is contemporaneous. A retrospective made one day later
          is not. Lag and stance disagree often enough to be worth carrying
          separately.
        </p>

        <h2>mkt:reasoningPresence</h2>
        <p>
          stated / inferred / absent. Filter to absent and you are looking at
          what a price-only training file contains. Filter to stated and you
          are looking at the context a group of models would actually need.
        </p>

        <h2>mkt:affectiveRegister and mkt:affectAttribution</h2>
        <p>
          Register names the emotional content: fear, euphoria, capitulation,
          disbelief, resignation, conviction, or none detected. Attribution
          names who said so: the speaker about themselves, an observer about
          the speaker, or me.
        </p>
        <p>
          Drucker&apos;s argument is that visualizations and schemas present
          interpretation as if it were observation. <Cite id="drucker" /> An
          affect field with no attribution field would do exactly that, quietly
          converting my reading of a document into a property of the document.
          Carrying attribution means every archivist-inferred value is legible
          as my inference, and a future user can filter my judgment out of the
          collection entirely. D&apos;Ignazio and Klein&apos;s principle of
          making labor and standpoint visible is the direct source of this
          pair. <Cite id="data-feminism" />
        </p>

        <h2>mkt:machineLegibility</h2>
        <p>
          An estimate of how much of the item survives being stored as prices.
          0 means nothing survives. 3 means the item is already in the format
          models consume.
        </p>
        <p>
          This field is an inversion of the National Archives criteria for
          intrinsic value, which ask whether a record&apos;s physical form
          carries meaning that would be lost in reproduction.{" "}
          <Cite id="intrinsic-value" /> The archival question is what a copy
          destroys. The machine learning question is what storing as prices
          destroys, and it turns out to be the same question with a different
          copying mechanism. Scoring it forces the collection to be sortable by
          how much of itself a model would ever see.
        </p>
        <p>
          This is my judgment, it is coarse on purpose, and it is the field
          most open to disagreement. I would rather ship a contestable field
          than an absent one.
        </p>

        <h2>Rights, and why nothing is mirrored here</h2>
        <p>
          Every item points at its source and none of them reproduce it. Partly
          this is copyright. Mostly it is that some of these records are
          ordinary people writing at 2am about their own money, and they did
          not publish in order to become a dataset.
        </p>
        <p>
          Lizbeth Robledo&apos;s work on the Undocumented Latin American Minors
          Project was the clearest statement I heard this term of the idea that
          maximum access is not the same as good practice, and that an
          archive&apos;s obligations run to the people in it before they run to
          its users. <Cite id="robledo-ulamp" /> The people in this collection
          are not vulnerable in that way and I am not claiming otherwise. The
          principle still applies at its own scale. A pointer keeps the record
          inside its own context, with whatever moderation, deletion, and
          community norms that context carries, and it leaves the person who
          wrote it able to take it back. A mirror takes that away permanently
          and calls it preservation.
        </p>
        <p>
          Caswell&apos;s account of record-making is the other half of it.{" "}
          <Cite id="caswell-records" /> If records are made rather than found,
          then I am making one every time I write a description, and the honest
          move is to keep my description and their words in visibly separate
          columns.
        </p>
        <p>
          Kim Christen&apos;s critique of the assumption that information wants
          to be free sits behind this choice as well. Pointing at a 2am forum
          post instead of copying it is the ethics-of-access position this
          archive takes.
        </p>

        <h2>Controlled vocabularies</h2>
        <p>
          All five custom fields use closed vocabularies, listed on this page
          with definitions. Closed vocabularies are a constraint I chose
          because open text fields would have let me avoid making decisions,
          and the decisions are the argument.
        </p>
      </Prose>

      <div className="mt-10 grid gap-8">
        {dictionaryFields.map((field) => (
          <section
            key={field.term}
            className="hairline p-4"
            aria-labelledby={field.term}
          >
            <h2 id={field.term} className="display text-[21px]">
              {field.term}
            </h2>
            {field.scholar ? (
              <p className="machine mt-1 text-[13px] text-ink-soft">
                Answers: {field.scholar}
              </p>
            ) : null}
            <p className="mt-2 max-w-[68ch]">{field.definition}</p>
            {field.values ? (
              <table className="data-table">
                <thead>
                  <tr>
                    <th scope="col">Value</th>
                    <th scope="col">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {field.values.map((entry) => (
                    <tr key={entry.value}>
                      <td className="machine">{entry.value}</td>
                      <td>{entry.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </section>
        ))}
      </div>

      <Prose>
        <h2>Export and interoperability</h2>
        <p>
          The full collection is exported as metadata.csv, items.json, and an
          Omeka S import-ready CSV with dcterms: column headers. The mkt:
          fields map into dcterms:description qualifiers on export, with a
          documented loss. That loss is disclosed rather than smoothed over.
        </p>
        <ul>
          <li>
            <a href="/exports/items.json">items.json</a>
          </li>
          <li>
            <a href="/exports/metadata.csv">metadata.csv</a>
          </li>
          <li>
            <a href="/exports/omeka-import.csv">omeka-import.csv</a>
          </li>
        </ul>
        {theoretical.length > 0 ? (
          <p>
            Theoretical items are listed beside the lag plot rather than placed
            on its axis. Currently:{" "}
            {theoretical.map((item) => item.title).join("; ")}.
          </p>
        ) : null}
      </Prose>
    </Main>
  );
}
