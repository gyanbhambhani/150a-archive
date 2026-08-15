import type { ArchiveItem } from "./types";

export interface TicketRow {
  label: string;
  value: string;
}

export interface MachineTicket {
  date: string;
  symbol: string;
  rows: TicketRow[];
}

const tickets: Record<string, MachineTicket> = {
  "brady-report": {
    date: "October 19, 1987",
    symbol: "US stock market",
    rows: [{ label: "one-day drop", value: "22.61%" }],
  },
  "viniar-25-sigma": {
    date: "August 9, 2007",
    symbol: "Goldman Sachs",
    rows: [{ label: "what got saved", value: "a loss" }],
  },
  "lehman-q2-call": {
    date: "September 15, 2008",
    symbol: "Lehman Brothers",
    rows: [{ label: "what got saved", value: "the firm was gone" }],
  },
  "flash-crash-report": {
    date: "May 6, 2010",
    symbol: "US stock market",
    rows: [
      { label: "drop during the day", value: "about 9%" },
      { label: "drop by the close", value: "3.2%" },
    ],
  },
  "xiv-termination": {
    date: "February 5, 2018",
    symbol: "a product tied to market swings",
    rows: [
      { label: "one-day drop", value: "about 96%" },
      { label: "what happened next", value: "the product was shut" },
    ],
  },
  "fomc-emergency-2020": {
    date: "March 16, 2020",
    symbol: "US stock market",
    rows: [{ label: "one-day drop", value: "11.98%" }],
  },
  "wsb-gme-thread": {
    date: "January 28, 2021",
    symbol: "GameStop stock",
    rows: [
      { label: "opened at", value: "265" },
      { label: "highest", value: "483" },
      { label: "lowest", value: "112.25" },
      { label: "closed at", value: "193.60" },
    ],
  },
  "robinhood-restriction": {
    date: "January 28, 2021",
    symbol: "GameStop stock",
    rows: [
      { label: "what happened", value: "buying was blocked" },
      { label: "the price", value: "reversed during the day" },
    ],
  },
  "boj-uchida-2024": {
    date: "August 5, 2024",
    symbol: "Japanese stock market",
    rows: [{ label: "one-day drop", value: "12.4%" }],
  },
  "prospect-theory": {
    date: "not a single day",
    symbol: "no market price",
    rows: [{ label: "what got saved", value: "nothing. this is a paper." }],
  },
  "tickeriq-backtest": {
    date: "2020 to 2025",
    symbol: "my own trading test",
    rows: [
      { label: "what got saved", value: "a performance curve" },
      { label: "what did not", value: "why any trade was made" },
    ],
  },
  "llm-retrospective-2026": {
    date: "written August 15, 2026",
    symbol: "a computer explanation of March 2020",
    rows: [
      { label: "what got saved", value: "a fluent paragraph" },
      { label: "written", value: "2,340 days after the fact" },
    ],
  },
};

export function getMachineTicket(item: ArchiveItem): MachineTicket {
  return (
    tickets[item.slug] ?? {
      date: item.dateOfEvent,
      symbol: item.slug,
      rows: [{ label: "saved as", value: item.machineVoice }],
    }
  );
}

export function fieldCount(item: ArchiveItem): number {
  const ticket = getMachineTicket(item);
  return 2 + ticket.rows.length;
}
