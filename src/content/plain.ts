import type {
  AffectAttribution,
  AffectiveRegister,
  ReasoningPresence,
  TemporalStance,
} from "../lib/types";

export const TAGLINE = "An archive of why people traded.";

export const stancePlain: Record<TemporalStance, string> = {
  contemporaneous: "Said while the ending was still unknown",
  predictive: "A forecast, spoken before the ending",
  retrospective: "Said after the ending was known",
  theoretical: "Not about one market event",
};

export const reasoningPlain: Record<ReasoningPresence, string> = {
  stated: "The why is in the document",
  inferred: "You can reconstruct the why",
  absent: "Only the outcome survives",
};

export const affectPlain: Record<AffectiveRegister, string> = {
  fear: "fear",
  euphoria: "euphoria",
  capitulation: "giving up",
  disbelief: "disbelief",
  resignation: "resignation",
  conviction: "conviction",
  "none-detected": "no feeling coded",
};

export const attributionPlain: Record<AffectAttribution, string> = {
  "self-reported": "the speaker named their own state",
  "observer-attributed": "a witness named it",
  "archivist-inferred": "I named it, and I marked that I did",
};

export const legibilityPlain: Record<0 | 1 | 2 | 3, string> = {
  0: "A price model would see almost none of this",
  1: "A thin leftover would survive",
  2: "Most of the operational content would survive",
  3: "Already in the format models consume",
};

export interface Briefing {
  event: string;
  said: string;
  tape: string;
}

export const briefings: Record<string, Briefing> = {
  "brady-report": {
    event: "19 October 1987. The US stock market fell 22.6% in one day.",
    said: "A presidential commission, 81 days later, described selling that fed on itself.",
    tape: "A 22.61% drop. No person's reason for selling.",
  },
  "viniar-25-sigma": {
    event: "August 2007. Large funds that use models lost money for days.",
    said: "Goldman's finance chief said the models were seeing moves they had treated as almost impossible.",
    tape: "A loss. The admission is gone.",
  },
  "lehman-q2-call": {
    event: "Lehman Brothers failed on 15 September 2008.",
    said: "On 16 June, managers told analysts the money story was intact.",
    tape: "The firm was gone. The June forecast has nowhere to live in a price list.",
  },
  "flash-crash-report": {
    event: "6 May 2010. US stocks fell about 9% during the day and recovered.",
    said: "A joint government report, 147 days later, reconstructed the orders.",
    tape: "Down about 9% during the day, 3.2% by the close. Silent on what anyone understood.",
  },
  "xiv-termination": {
    event: "5 February 2018. A product tied to market swings collapsed and was shut.",
    said: "The bank published a legal notice that a trigger had been met.",
    tape: "Down about 96%, then shut. Fastest record in the set, and the emptiest.",
  },
  "fomc-emergency-2020": {
    event: "16 March 2020. US stocks fell 11.98%, the worst day since 1987.",
    said: "The night before, the US central bank cut rates to zero and said it would buy assets.",
    tape: "An 11.98% drop. The Sunday paragraph is not in the number.",
  },
  "wsb-gme-thread": {
    event: "28 January 2021. GameStop opened at 265, reached 483, closed at 193.60.",
    said: "People on a public forum wrote, while the day was still open, why they would not sell.",
    tape: "Four numbers. The writing is gone from the file.",
  },
  "robinhood-restriction": {
    event: "The same day. Some brokerages blocked people from buying GameStop.",
    said: "Robinhood said it had to post more money with the firms that settle trades.",
    tape: "Buying was blocked. The sentence is in none of the price files.",
  },
  "boj-uchida-2024": {
    event: "5 August 2024. The Japanese stock market fell 12.4%.",
    said: "Two days later, a deputy at the central bank said they would not raise rates into a shaky market.",
    tape: "A 12.4% drop. The paragraph that turned the market around is missing from it.",
  },
  "prospect-theory": {
    event: "Not a single day. This is the measurement problem.",
    said: "Kahneman and Tversky: losses weigh about two to two and a half times equivalent gains.",
    tape: "No price series exists for this item. A percent has no slot for the feeling.",
  },
  "tickeriq-backtest": {
    event: "A five-year test of my own trading rules.",
    said: "I saved how the rules performed. I did not save why any trade was made.",
    tape: "A curve of results. No fear. No reason. Nothing a model could learn from except the leftover.",
  },
  "llm-retrospective-2026": {
    event: "16 March 2020, explained on 15 August 2026.",
    said: "I asked a language model why the market fell, and I saved the question.",
    tape: "A fluent paragraph, 2,340 days late. It could not have been written in the moment.",
  },
};
