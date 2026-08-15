import type { ArchiveItem } from "../lib/types";

export const items: ArchiveItem[] = [
  {
    slug: "brady-report",
    title: "Report of the Presidential Task Force on Market Mechanisms",
    creator: [
      "Presidential Task Force on Market Mechanisms (Brady Commission)",
    ],
    publisher: "US Government Printing Office",
    dateCreated: "1988-01-08",
    dateOfEvent: "1987-10-19",
    description:
      "Federal report submitted to the President on 8 January 1988 reconstructing the 19 October 1987 equity crash. The commission describes a cascade of portfolio insurance selling into a falling market. Programs and order flow are named. No person's reason for selling that morning is recorded.",
    subject: [
      "Black Monday",
      "portfolio insurance",
      "market microstructure",
      "1987 crash",
    ],
    type: "Text",
    format: "application/pdf",
    identifier:
      "https://www.sechistorical.org/collection/papers/1980/1988_0101_BradyReport.pdf",
    source: "SEC Historical Society, Brady Report PDF, dated January 1988",
    language: "en",
    rights: "United States federal government work, public domain",
    rightsHolder: "United States government",
    relation: ["flash-crash-report", "xiv-termination"],
    coverage: "United States equity markets",
    wayOfKnowing: "federal report",
    temporalStance: "retrospective",
    reasoningPresence: "inferred",
    affectiveRegister: ["none-detected"],
    affectAttribution: "archivist-inferred",
    machineLegibility: 1,
    priceOutcome:
      "Dow Jones Industrial Average fell roughly 22.6 percent in one session",
    lookaheadWindow: "1 day",
    humanVoice:
      "A government commission tried to explain why the US stock market lost more than a fifth of its value in one day. The report describes selling programs that sold more as prices fell, which made prices fall more. It never names what any one person on the floor was thinking that morning.",
    machineVoice: "1987-10-19  DJIA  -22.61%",
    externalUrl:
      "https://www.sechistorical.org/collection/papers/1980/1988_0101_BradyReport.pdf",
  },
  {
    slug: "viniar-25-sigma",
    title: "Goldman Sachs CFO describes moves his models did not price",
    creator: ["David Viniar", "Peter Thal Larsen"],
    publisher: "Financial Times",
    dateCreated: "2007-08-13",
    dateOfEvent: "2007-08-09",
    description:
      "Financial Times report of 13 August 2007 quoting Goldman Sachs CFO David Viniar on losses in the firm's quantitative equity funds during the week of 6 August 2007. Viniar describes several consecutive days of moves his models treated as effectively impossible. The statement is made while the episode is still unfolding.",
    subject: [
      "quant quake",
      "model risk",
      "quantitative equity",
      "August 2007",
    ],
    type: "Text",
    format: "text/html",
    identifier: "https://www.ft.com/content/d2121cb6-49cb-11dc-9ffe-0000779fd2ac",
    source: "Financial Times, Goldman pays the price of being big",
    language: "en",
    rights: "All rights reserved by the Financial Times. Linked, not mirrored.",
    rightsHolder: "The Financial Times Ltd.",
    relation: ["tickeriq-backtest", "prospect-theory"],
    coverage: "United States quantitative equity funds",
    wayOfKnowing: "financial journalism",
    temporalStance: "contemporaneous",
    reasoningPresence: "stated",
    affectiveRegister: ["disbelief"],
    affectAttribution: "observer-attributed",
    machineLegibility: 0,
    priceOutcome:
      "Quantitative equity funds recorded severe multi-day losses and partial recovery within the week",
    lookaheadWindow: "5 days",
    humanVoice:
      "A finance chief at a large bank told reporters that his company's models were seeing moves they had treated as almost impossible, several days in a row. He was saying, in public, that the model and the world had come apart, while it was still happening.",
    machineVoice: "2007-08-09  QUANT_EQ  drawdown",
    quote: {
      text: "We were seeing things that were 25-standard deviation moves, several days in a row.",
      attribution:
        "David Viniar, quoted in the Financial Times, 13 August 2007",
    },
    externalUrl:
      "https://www.ft.com/content/d2121cb6-49cb-11dc-9ffe-0000779fd2ac",
  },
  {
    slug: "lehman-q2-call",
    title: "Lehman Brothers second quarter 2008 earnings call",
    creator: ["Lehman Brothers Holdings Inc."],
    contributor: ["Richard S. Fuld Jr.", "Erin Callan"],
    publisher: "Lehman Brothers Holdings Inc.",
    dateCreated: "2008-06-16",
    dateOfEvent: "2008-09-15",
    description:
      "Public earnings conference call held on 16 June 2008 to discuss second-quarter results. Management states a case for capital and liquidity to analysts on the record. The firm filed for bankruptcy on 15 September 2008. The item is kept because it is a wrong prediction spoken in public. A price series cannot hold one.",
    subject: [
      "Lehman Brothers",
      "earnings call",
      "2008 crisis",
      "wrong prediction",
    ],
    type: "Text",
    format: "application/pdf",
    identifier:
      "https://web.stanford.edu/~jbulow/lehmandocs/docs/DEBTORS/LBHI_SEC07940_519082-519110.pdf",
    source: "Stanford Lehman documents collection, Q2 2008 call transcript",
    language: "en",
    rights: "Linked court and research copy. Not reproduced here.",
    relation: ["viniar-25-sigma"],
    coverage: "United States investment banking",
    wayOfKnowing: "earnings call transcript",
    temporalStance: "predictive",
    reasoningPresence: "stated",
    affectiveRegister: ["conviction"],
    affectAttribution: "archivist-inferred",
    machineLegibility: 0,
    priceOutcome:
      "The firm filed for bankruptcy approximately three months later",
    lookaheadWindow: "90 days",
    humanVoice:
      "Three months before the firm failed, its managers told analysts that the money story was sound. They gave reasons. Those reasons were wrong. A list of prices stored what happened to the firm. The failed forecast had nowhere to go.",
    machineVoice: "2008-09-15  LEH  delisted",
    externalUrl:
      "https://web.stanford.edu/~jbulow/lehmandocs/docs/DEBTORS/LBHI_SEC07940_519082-519110.pdf",
  },
  {
    slug: "flash-crash-report",
    title: "Findings Regarding the Market Events of May 6, 2010",
    creator: [
      "US Commodity Futures Trading Commission",
      "US Securities and Exchange Commission",
    ],
    publisher: "CFTC and SEC",
    dateCreated: "2010-09-30",
    dateOfEvent: "2010-05-06",
    description:
      "Joint staff report released 30 September 2010 reconstructing the 6 May 2010 sudden drop. The account is given in orders placed and buyers stepping away. It arrived 147 days after the session. It is the authoritative public record of what the machines did. It is silent on what anyone watching understood at the time.",
    subject: [
      "flash crash",
      "liquidity withdrawal",
      "Waddell and Reed",
      "May 2010",
    ],
    type: "Text",
    format: "application/pdf",
    identifier: "https://www.sec.gov/news/report/2010/marketevents-report.pdf",
    source: "SEC, Findings Regarding the Market Events of May 6, 2010",
    language: "en",
    rights: "United States federal government work, public domain",
    rightsHolder: "United States government",
    relation: ["brady-report", "xiv-termination"],
    coverage: "United States equities and index futures",
    wayOfKnowing: "federal report",
    temporalStance: "retrospective",
    reasoningPresence: "inferred",
    affectiveRegister: ["none-detected"],
    affectAttribution: "archivist-inferred",
    machineLegibility: 1,
    priceOutcome:
      "Major indices fell sharply and recovered most of the loss within roughly 36 minutes",
    lookaheadWindow: "1 day",
    humanVoice:
      "A joint government report, written 147 days later, reconstructed how orders flooded in and how buyers stepped away. It is the official account of a few minutes when prices fell about 9 percent and then recovered. It says what the machines did. It does not say what any person watching understood.",
    machineVoice: "2010-05-06  SPX  intraday -9%  close -3.2%",
    externalUrl: "https://www.sec.gov/news/report/2010/marketevents-report.pdf",
  },
  {
    slug: "xiv-termination",
    title:
      "Acceleration notice for the VelocityShares Daily Inverse VIX Short-Term ETN",
    creator: ["Credit Suisse AG"],
    publisher: "Credit Suisse AG",
    dateCreated: "2018-02-06",
    dateOfEvent: "2018-02-05",
    description:
      "Issuer notice dated 6 February 2018 stating that an acceleration event occurred on 5 February 2018 because the note's intraday indicative value fell to or below 20 percent of the prior close. The document names a trigger and a redemption. It does not name a holder's reason for being in the product.",
    subject: ["XIV", "VIX", "Volmageddon", "ETN acceleration"],
    type: "Text",
    format: "text/html",
    identifier:
      "https://www.sec.gov/Archives/edgar/data/1053092/000095010318001572/dp86358_ex9901.htm",
    source: "SEC EDGAR exhibit, Credit Suisse AG event acceleration of XIV",
    language: "en",
    rights: "All rights reserved by the issuer. Linked, not mirrored.",
    rightsHolder: "Credit Suisse AG",
    relation: ["brady-report", "flash-crash-report"],
    coverage: "United States listed volatility notes",
    wayOfKnowing: "corporate legal notice",
    temporalStance: "retrospective",
    reasoningPresence: "absent",
    affectiveRegister: ["none-detected"],
    affectAttribution: "archivist-inferred",
    machineLegibility: 2,
    priceOutcome:
      "The note's indicative value fell more than 90 percent and the product was accelerated",
    lookaheadWindow: "1 day",
    humanVoice:
      "A legal notice said a product had hit a trigger and would be shut down. Holders had reasons for owning it. The notice is not required to include any of those reasons, and it does not.",
    machineVoice: "2018-02-05  XIV  -96%  terminated",
    externalUrl:
      "https://www.sec.gov/Archives/edgar/data/1053092/000095010318001572/dp86358_ex9901.htm",
  },
  {
    slug: "fomc-emergency-2020",
    title: "Federal Open Market Committee emergency statement, March 2020",
    creator: ["Board of Governors of the Federal Reserve System"],
    publisher: "Board of Governors of the Federal Reserve System",
    dateCreated: "2020-03-15",
    dateOfEvent: "2020-03-16",
    description:
      "FOMC statement released at 5:00 p.m. EDT on Sunday 15 March 2020. The committee cut the federal funds rate to a range of 0 to 0.25 percent and announced large purchases of Treasuries and agency MBS. The next regular session, 16 March, the S&P 500 fell 11.98 percent. The causal object is a paragraph of policy language issued before the open.",
    subject: [
      "FOMC",
      "COVID-19",
      "emergency rate cut",
      "March 2020",
    ],
    type: "Text",
    format: "text/html",
    identifier:
      "https://www.federalreserve.gov/newsevents/pressreleases/monetary20200315a.htm",
    source: "Federal Reserve Board, FOMC statement of 15 March 2020",
    language: "en",
    rights: "United States federal government work, public domain",
    rightsHolder: "United States government",
    relation: ["boj-uchida-2024", "prospect-theory"],
    coverage: "United States monetary policy and equity markets",
    wayOfKnowing: "central bank statement",
    temporalStance: "contemporaneous",
    reasoningPresence: "stated",
    affectiveRegister: ["fear"],
    affectAttribution: "archivist-inferred",
    machineLegibility: 0,
    priceOutcome:
      "Equity futures fell to limit down and the following session opened sharply lower despite the announcement",
    lookaheadWindow: "5 days",
    humanVoice:
      "On a Sunday night, the US central bank cut interest rates to near zero and said it would buy assets. The statement was meant to change what people expected the next day. The next day, stocks still fell almost 12 percent. The paragraph is public. It is not inside the day's price.",
    machineVoice: "2020-03-16  SPX  -11.98%",
    externalUrl:
      "https://www.federalreserve.gov/newsevents/pressreleases/monetary20200315a.htm",
  },
  {
    slug: "wsb-gme-thread",
    title: "A public forum thread written during the GameStop surge of January 2021",
    creator: ["Anonymous forum participants"],
    publisher: "Reddit",
    dateCreated: "2021-01-28",
    dateOfEvent: "2021-01-28",
    description:
      "A public forum thread posted on 28 January 2021 while GameStop's price was still moving. Participants state reasons for holding in public, in memes and in-jokes, while the session is still open. Usernames are not rendered on this site. The archive points at the thread and does not copy it.",
    subject: [
      "GameStop",
      "short squeeze",
      "retail trading",
      "forum vernacular",
    ],
    type: "Text",
    format: "text/html",
    identifier:
      "https://www.reddit.com/r/wallstreetbets/comments/l78uct/gme_yolo_update_jan_28_2021/",
    source: "r/wallstreetbets, contemporaneous thread of 28 January 2021",
    language: "en",
    rights:
      "Link only. No reproduction of posts. No usernames rendered on this site.",
    relation: ["robinhood-restriction", "prospect-theory"],
    coverage: "United States equities, GameStop Corp.",
    wayOfKnowing: "forum vernacular",
    temporalStance: "contemporaneous",
    reasoningPresence: "stated",
    affectiveRegister: ["euphoria", "conviction"],
    affectAttribution: "self-reported",
    machineLegibility: 0,
    priceOutcome:
      "GameStop traded from roughly 265 to an intraday high near 483 and closed at 193.60 on 28 January 2021",
    lookaheadWindow: "1 day",
    humanVoice:
      "On this day, people who owned GameStop stock wrote, in public, why they would not sell. They said they were holding because they believed other people would keep holding. They said they knew the price could fall. They said they were doing it anyway. That is a reason. It is written down. It is still on the internet. A computer that stores the day's prices does not keep any of it.",
    machineVoice: "2021-01-28  GME  O:265.00  C:193.60",
    externalUrl:
      "https://www.reddit.com/r/wallstreetbets/comments/l78uct/gme_yolo_update_jan_28_2021/",
  },
  {
    slug: "robinhood-restriction",
    title: "Robinhood restricts opening positions in certain securities",
    creator: ["Robinhood Markets, Inc."],
    publisher: "Robinhood Markets, Inc.",
    dateCreated: "2021-01-28",
    dateOfEvent: "2021-01-28",
    description:
      "Platform blog post of 28 January 2021 announcing that certain securities, including GameStop, were restricted to position-closing only. The stated reason is clearinghouse deposit requirements under volatility. GameStop closed at 193.60 that day, down from the prior close. The sentence that changed who could buy is absent from price datasets.",
    subject: [
      "Robinhood",
      "trading restriction",
      "GameStop",
      "clearinghouse deposits",
    ],
    type: "Text",
    format: "text/html",
    identifier:
      "https://robinhood.com/us/en/newsroom/keeping-customers-informed-through-market-volatility/",
    source:
      "Robinhood newsroom, Keeping Customers Informed Through Market Volatility",
    language: "en",
    rights: "All rights reserved by Robinhood Markets, Inc. Linked, not mirrored.",
    rightsHolder: "Robinhood Markets, Inc.",
    relation: ["wsb-gme-thread"],
    coverage: "United States retail brokerage",
    wayOfKnowing: "platform statement",
    temporalStance: "contemporaneous",
    reasoningPresence: "stated",
    affectiveRegister: ["none-detected"],
    affectAttribution: "archivist-inferred",
    machineLegibility: 1,
    priceOutcome:
      "GameStop fell sharply from its intraday high of 483 and closed at 193.60 following the restriction",
    lookaheadWindow: "2 days",
    humanVoice:
      "A brokerage told customers they could sell certain stocks but could not buy more of them. It gave a reason: it had to post more money with the firms that settle trades. The price move that followed is in every dataset. The sentence that changed who could buy is in none of them.",
    machineVoice: "2021-01-28  GME  restriction  intraday reversal",
    externalUrl:
      "https://robinhood.com/us/en/newsroom/keeping-customers-informed-through-market-volatility/",
  },
  {
    slug: "boj-uchida-2024",
    title:
      "Bank of Japan deputy governor remarks following the August 2024 unwind",
    creator: ["Shinichi Uchida"],
    contributor: ["Bank of Japan"],
    publisher: "Bank of Japan",
    dateCreated: "2024-08-07",
    dateOfEvent: "2024-08-05",
    description:
      "Speech by Deputy Governor Uchida Shinichi in Hakodate on 7 August 2024, two days after the Nikkei 225 fell 12.40 percent. Uchida states that the Bank will not raise rates while financial markets are unstable. Markets reversed after the remarks. The causal object is a paragraph of natural language.",
    subject: [
      "Bank of Japan",
      "yen carry trade",
      "August 2024",
      "Nikkei 225",
    ],
    type: "Text",
    format: "text/html",
    identifier: "https://www.boj.or.jp/en/about/press/koen_2024/ko240807a.htm",
    source:
      "Bank of Japan, Speech by Deputy Governor Uchida in Hakodate, 7 August 2024",
    language: "en",
    rights: "Copyright Bank of Japan. English text linked, not mirrored.",
    rightsHolder: "Bank of Japan",
    relation: ["fomc-emergency-2020"],
    coverage: "Japan equities and yen funding markets",
    wayOfKnowing: "central bank statement",
    temporalStance: "contemporaneous",
    reasoningPresence: "stated",
    affectiveRegister: ["fear", "capitulation"],
    affectAttribution: "archivist-inferred",
    machineLegibility: 0,
    priceOutcome:
      "Japanese equities fell 12.40 percent on 5 August 2024 and recovered substantially in the following sessions",
    lookaheadWindow: "5 days",
    humanVoice:
      "A deputy at Japan's central bank said the bank would not raise rates into a market that was already unstable. Markets turned around. The cause was a paragraph of ordinary language, and that paragraph does not exist in any file of prices.",
    machineVoice: "2024-08-05  NKY  -12.4%",
    externalUrl: "https://www.boj.or.jp/en/about/press/koen_2024/ko240807a.htm",
  },
  {
    slug: "prospect-theory",
    title: "Prospect Theory: An Analysis of Decision under Risk",
    creator: ["Daniel Kahneman", "Amos Tversky"],
    publisher: "Econometrica 47(2), 263 to 291",
    dateCreated: "1979-03-01",
    dateOfEvent: "not event-specific",
    description:
      "Peer-reviewed paper published in Econometrica in March 1979. It establishes that people weigh losses roughly two to two and a half times as heavily as equivalent gains. The paper is in the archive because it names the measurement problem the collection is organized around: the asymmetry is real and invisible in a symmetric price change.",
    subject: [
      "prospect theory",
      "loss aversion",
      "decision under risk",
      "behavioral economics",
    ],
    type: "Text",
    format: "application/pdf",
    identifier: "https://www.jstor.org/stable/1914185",
    source: "Econometrica, Vol. 47, No. 2, March 1979, JSTOR 1914185",
    language: "en",
    rights: "Copyright The Econometric Society. Linked, not mirrored.",
    rightsHolder: "The Econometric Society",
    coverage: "theoretical, not geographic",
    wayOfKnowing: "peer-reviewed economics",
    temporalStance: "theoretical",
    reasoningPresence: "stated",
    affectiveRegister: ["none-detected"],
    affectAttribution: "archivist-inferred",
    machineLegibility: 0,
    priceOutcome: "n/a",
    lookaheadWindow: "n/a",
    humanVoice:
      "Two psychologists showed that people feel a loss about twice as strongly as an equal gain. That difference shapes how people sell when they are hurting. A percent change has no slot for the extra weight of the loss.",
    machineVoice: "no price series exists for this item",
    externalUrl: "https://www.jstor.org/stable/1914185",
  },
  {
    slug: "tickeriq-backtest",
    title: "My own five-year test, with no reasons saved",
    creator: ["Gyan Bhambhani"],
    publisher: "Author",
    dateCreated: "2025-08-15",
    dateOfEvent: "2020-01-02/2025-08-01",
    description:
      "A five-year test of trading rules I built and ran with real money, January 2020 through August 2025. It reports how the rules performed. It contains no record of why any trade was made. reasoningPresence is absent by construction.",
    subject: [
      "backtest",
      "factor log",
      "equity curve",
      "stripped reasoning",
    ],
    type: "Dataset",
    format: "image/svg+xml",
    identifier: "https://candle-archive.local/items/tickeriq-backtest",
    source: "Author's signal engine output, August 2025",
    language: "en",
    rights: "Author's own work, CC BY-NC 4.0",
    rightsHolder: "Gyan Bhambhani",
    relation: ["llm-retrospective-2026", "viniar-25-sigma"],
    coverage: "United States equities, personal research",
    wayOfKnowing: "personal engineering artifact",
    temporalStance: "retrospective",
    reasoningPresence: "absent",
    affectiveRegister: ["none-detected"],
    affectAttribution: "self-reported",
    machineLegibility: 3,
    priceOutcome: "n/a, the artifact is itself an outcome record",
    lookaheadWindow: "the full backtest window",
    humanVoice:
      "I ran a five-year test of my own trading rules. I saved how they performed. I did not save why I took any trade. A group of models cannot learn fear from that file. There is no fear in it.",
    machineVoice: "equity_curve.csv  factor_log.parquet  sharpe  max_dd",
    thumbnail: {
      src: "/images/tickeriq-equity.svg",
      alt: "An equity curve that climbs in uneven steps from early 2020 to mid 2025, with a deep drawdown through 2022 and a smaller pullback in 2024, ending above its start.",
      credit:
        "Gyan Bhambhani, drawn from the author's backtest output, August 2025.",
    },
    externalUrl: "/items/tickeriq-backtest",
  },
  {
    slug: "llm-retrospective-2026",
    title: "A language model explains a market event six years later",
    creator: [
      "Gyan Bhambhani (prompt)",
      "Cursor Grok 4.6 (output)",
    ],
    publisher: "Author",
    dateCreated: "2026-08-15",
    dateOfEvent: "2020-03-16",
    description:
      "Archived language-model explanation of the 16 March 2020 equity session, generated on 15 August 2026. The record includes the exact prompt, the model identifier, the timestamp, and the completion. The prose is fluent and roughly correct. It cannot be contemporaneous. Hindsight lag is the largest in the collection.",
    subject: [
      "language model",
      "hindsight",
      "March 2020",
      "stochastic parrot",
    ],
    type: "Text",
    format: "text/plain",
    identifier: "https://candle-archive.local/items/llm-retrospective-2026",
    source: "Author-generated completion, Cursor Grok 4.6, 15 August 2026",
    language: "en",
    rights:
      "Prompt and archival framing CC BY-NC 4.0. Model output archived as artifact.",
    rightsHolder: "Gyan Bhambhani",
    relation: ["fomc-emergency-2020", "tickeriq-backtest"],
    coverage: "United States equities, March 2020",
    wayOfKnowing: "machine-generated text",
    temporalStance: "retrospective",
    reasoningPresence: "absent",
    affectiveRegister: ["none-detected"],
    affectAttribution: "archivist-inferred",
    machineLegibility: 3,
    priceOutcome: "n/a",
    lookaheadWindow: "n/a",
    humanVoice:
      "I asked a language model why stocks fell on a day in March 2020, and I saved the question, the answer, the model name, and the time. The answer is fluent and roughly right. It was written 2,340 days later. It could not have been written in the moment, because the model was not there.",
    machineVoice: "prompt + completion + model_version + timestamp",
    prompt:
      "Why did US equity markets fall on 16 March 2020? Give a concise explanation of the public record, about 180 words. Name the main causes. Do not use the first person.",
    modelVersion: "Cursor Grok 4.6",
    generatedAt: "2026-08-15T14:41:00-07:00",
    machineOutput:
      "On 16 March 2020 the S&P 500 fell 11.98 percent, its worst session since 1987. The immediate cause was the accelerating coronavirus pandemic. Over the preceding weekend, governments in Europe and the United States expanded shutdowns, and the World Health Organization pandemic declaration was already in force. Equity futures hit limit-down before the open. The Federal Open Market Committee had cut the federal funds rate to a range of 0 to 0.25 percent on Sunday evening and announced large Treasury and agency MBS purchases. The announcement did not reverse Monday selling. Liquidity in Treasuries was already impaired, credit spreads were widening, and forced de-risking by levered funds added supply. Oil had collapsed earlier in the month after a price war between Russia and Saudi Arabia, which tightened financial conditions further. Circuit breakers halted US equities more than once during the session. The day sits inside a three-week interval in which US stocks lost about a third of their value, then recovered as fiscal and monetary facilities arrived. A price series records the close. It does not record the Sunday statement, the limit-down overnight, or the reason anyone sold.",
    externalUrl: "/ai-use",
  },
];

export const itemBySlug: Record<string, ArchiveItem> = Object.fromEntries(
  items.map((item) => [item.slug, item]),
);

export function getItem(slug: string): ArchiveItem | undefined {
  return itemBySlug[slug];
}

export function getRelated(item: ArchiveItem): ArchiveItem[] {
  return (item.relation ?? [])
    .map((slug) => itemBySlug[slug])
    .filter((related): related is ArchiveItem => Boolean(related));
}
