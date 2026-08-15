export type TemporalStance =
  | "contemporaneous"
  | "predictive"
  | "retrospective"
  | "theoretical";

export type ReasoningPresence = "stated" | "inferred" | "absent";

export type AffectiveRegister =
  | "fear"
  | "euphoria"
  | "capitulation"
  | "disbelief"
  | "resignation"
  | "conviction"
  | "none-detected";

export type AffectAttribution =
  | "self-reported"
  | "observer-attributed"
  | "archivist-inferred";

export type WayOfKnowing =
  | "federal report"
  | "financial journalism"
  | "forum vernacular"
  | "corporate legal notice"
  | "earnings call transcript"
  | "central bank statement"
  | "peer-reviewed economics"
  | "personal engineering artifact"
  | "machine-generated text"
  | "platform statement";

export type MachineLegibility = 0 | 1 | 2 | 3;

export interface ArchiveItem {
  slug: string;

  title: string;
  creator: string[];
  contributor?: string[];
  publisher?: string;
  dateCreated: string;
  dateOfEvent: string;
  description: string;
  subject: string[];
  type: string;
  format: string;
  identifier: string;
  source: string;
  language: string;
  rights: string;
  rightsHolder?: string;
  relation?: string[];
  coverage: string;

  wayOfKnowing: WayOfKnowing;
  temporalStance: TemporalStance;
  reasoningPresence: ReasoningPresence;
  affectiveRegister: AffectiveRegister[];
  affectAttribution: AffectAttribution;
  machineLegibility: MachineLegibility;
  priceOutcome: string;
  lookaheadWindow: string;

  humanVoice: string;
  machineVoice: string;
  quote?: { text: string; attribution: string };
  thumbnail?: { src: string; alt: string; credit: string };
  externalUrl: string;

  prompt?: string;
  modelVersion?: string;
  generatedAt?: string;
  machineOutput?: string;
}

export interface Reading {
  id: string;
  section: "course" | "outside";
  citation: string;
  annotation: string;
  used: string;
  shortCite: string;
}

export interface DictionaryField {
  term: string;
  namespace: "dcterms" | "mkt";
  scholar?: string;
  definition: string;
  values?: { value: string; meaning: string }[];
}
