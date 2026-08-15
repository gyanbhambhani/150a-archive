import type { DictionaryField } from "../lib/types";

export const dictionaryFields: DictionaryField[] = [
  {
    term: "dcterms:temporal",
    namespace: "dcterms",
    scholar: "Baca",
    definition:
      "Date of the market event. Kept separate from the date the statement was made so that a crash and a report written ninety days later are not filed as the same kind of evidence.",
  },
  {
    term: "dcterms:created",
    namespace: "dcterms",
    scholar: "Baca",
    definition:
      "Date the statement was made. For a federal report this is the submission date. For a forum thread this is the post date. For a model completion this is the generation timestamp.",
  },
  {
    term: "mkt:hindsightLag",
    namespace: "mkt",
    scholar: "Baca",
    definition:
      "Derived field. dateCreated minus dateOfEvent, in days. Never authored by hand. Sortable and plottable. This is the intervention: lag is a first-class field instead of a sentence in a note.",
  },
  {
    term: "mkt:temporalStance",
    namespace: "mkt",
    scholar: "Trouillot",
    definition:
      "Whether the speaker knew the ending. Lag is quantitative. Stance is categorical. They disagree often enough to carry separately.",
    values: [
      {
        value: "contemporaneous",
        meaning: "Produced while the outcome was still unknown.",
      },
      {
        value: "predictive",
        meaning: "Makes a forward claim. The outcome is unknown at the time.",
      },
      {
        value: "retrospective",
        meaning: "Produced after the outcome was known.",
      },
      {
        value: "theoretical",
        meaning: "Makes no claim about a specific event.",
      },
    ],
  },
  {
    term: "mkt:reasoningPresence",
    namespace: "mkt",
    scholar: "Trouillot",
    definition:
      "Whether the why is in the record. Absent is a price-only file. " +
      "Stated is the context a group of models would need.",
    values: [
      {
        value: "stated",
        meaning: "The reason is in the record, in the speaker's words.",
      },
      {
        value: "inferred",
        meaning: "The reason is reconstructible but not stated.",
      },
      {
        value: "absent",
        meaning: "Only the outcome survives.",
      },
    ],
  },
  {
    term: "mkt:affectiveRegister",
    namespace: "mkt",
    scholar: "Drucker",
    definition:
      "Named emotional content of the record. Closed vocabulary. An open text field would have let me avoid making a decision, and the decision is the argument.",
    values: [
      { value: "fear", meaning: "Anticipatory dread of loss." },
      { value: "euphoria", meaning: "Heightened positive affect in a move." },
      { value: "capitulation", meaning: "Forced or exhausted selling." },
      { value: "disbelief", meaning: "Stated mismatch with a model or prior." },
      { value: "resignation", meaning: "Acceptance without conviction." },
      { value: "conviction", meaning: "Stated confidence in a view." },
      { value: "none-detected", meaning: "No affective content coded." },
    ],
  },
  {
    term: "mkt:affectAttribution",
    namespace: "mkt",
    scholar: "D'Ignazio and Klein",
    definition:
      "Who named the affective register. Carrying attribution means every archivist-inferred value is legible as my inference. A future user can filter my judgment out of the collection.",
    values: [
      {
        value: "self-reported",
        meaning: "The speaker names their own state.",
      },
      {
        value: "observer-attributed",
        meaning: "A witness names it.",
      },
      {
        value: "archivist-inferred",
        meaning: "I named it, and I am marking that I did.",
      },
    ],
  },
  {
    term: "mkt:machineLegibility",
    namespace: "mkt",
    scholar: "National Archives, intrinsic value",
    definition:
      "Estimate of how much of the item survives ingestion into a standard price-based training pipeline. This is my judgment. It is coarse on purpose. I would rather ship a contestable field than an absent one.",
    values: [
      { value: "0", meaning: "Essentially nothing survives." },
      { value: "1", meaning: "A thin residue survives: a date, a percent." },
      { value: "2", meaning: "Most of the operational content survives." },
      {
        value: "3",
        meaning: "The item is already in the format models consume.",
      },
    ],
  },
];
