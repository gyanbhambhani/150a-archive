export interface Emotion {
  id: string;
  name: string;
  meaning: string;
}

export const EMOTION_BANK: Emotion[] = [
  {
    id: "fear",
    name: "fear",
    meaning: "Expecting a loss and wanting to get out before it gets worse.",
  },
  {
    id: "panic",
    name: "panic",
    meaning: "Selling because the selling itself feels like proof you should sell.",
  },
  {
    id: "greed",
    name: "greed",
    meaning: "Wanting the next jump more than you wanted the last one.",
  },
  {
    id: "hope",
    name: "hope",
    meaning: "Waiting for a bounce because the story still feels unfinished.",
  },
  {
    id: "bandwagon",
    name: "bandwagon",
    meaning: "Piling on because the crowd already piled on.",
  },
  {
    id: "missing-out",
    name: "missing out",
    meaning: "Buying so you are not the person who stayed out.",
  },
  {
    id: "conviction",
    name: "conviction",
    meaning: "Holding on purpose, even while it hurts.",
  },
  {
    id: "denial",
    name: "denial",
    meaning: "Refusing to believe the number on the screen.",
  },
  {
    id: "relief",
    name: "relief",
    meaning: "Getting out just to make the feeling stop.",
  },
  {
    id: "revenge",
    name: "revenge",
    meaning: "Trading to get even with a loss that still stings.",
  },
  {
    id: "disbelief",
    name: "disbelief",
    meaning: "The move does not feel real yet.",
  },
  {
    id: "giving-up",
    name: "giving up",
    meaning: "Selling because you cannot sit with it any longer.",
  },
  {
    id: "euphoria",
    name: "euphoria",
    meaning: "The high of being right together.",
  },
  {
    id: "doubt",
    name: "doubt",
    meaning: "Wanting to hold and sell in the same breath.",
  },
  {
    id: "spite",
    name: "spite",
    meaning:
      "Holding to punish someone else, including people who bet against you.",
  },
  {
    id: "pride",
    name: "pride",
    meaning: "Needing the trade to prove you were right.",
  },
  {
    id: "anxiety",
    name: "anxiety",
    meaning: "Checking the number again because the last check did not help.",
  },
  {
    id: "herd",
    name: "herd",
    meaning: "Matching the group so you are not standing alone.",
  },
  {
    id: "shock",
    name: "shock",
    meaning: "The drop arrived too fast to think.",
  },
  {
    id: "stubbornness",
    name: "stubbornness",
    meaning: "Repeating the same reason after it already failed once.",
  },
];

export interface IntentHit {
  emotionId: string;
  cue: string;
}

export interface IntentRecord {
  hits: IntentHit[];
  log: string;
}

const bySlug: Record<string, IntentRecord> = {
  "wsb-gme-thread": {
    log:
      "Hold with the crowd. They know the price can fall. They are doing it anyway.",
    hits: [
      { emotionId: "conviction", cue: "holding" },
      { emotionId: "bandwagon", cue: "other people" },
      { emotionId: "herd", cue: "keep holding" },
      { emotionId: "fear", cue: "fall" },
      { emotionId: "stubbornness", cue: "anyway" },
    ],
  },
};

export function getIntentRecord(slug: string): IntentRecord {
  return (
    bySlug[slug] ?? {
      log: "A person had a reason. The leftover file did not keep it.",
      hits: [{ emotionId: "fear", cue: "" }],
    }
  );
}

export function emotionById(id: string): Emotion | undefined {
  return EMOTION_BANK.find((row) => row.id === id);
}
