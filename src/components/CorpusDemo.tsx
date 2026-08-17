"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MachineTicket } from "@/components/MachineTicket";
import { MICROCOPY } from "@/content/copy";
import {
  EMOTION_BANK,
  emotionById,
  getIntentRecord,
} from "@/content/emotions";
import { fieldCount } from "@/lib/ticket";
import type { ArchiveItem } from "@/lib/types";

type Step = "words" | "numbers" | "intent" | "sketch";

const leftover = [100, 132, 98, 72, 78, 74, 71];
const person = [100, 140, 88, 58, 54, 56, 55];
const carousel = [100, 118, 114, 116, 122, 128, 134];
const marks = ["start", "jump", "scare", "low", "next", "later", "end"];

export function CorpusDemo({ item }: { item: ArchiveItem }) {
  const [step, setStep] = useState<Step>("words");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [live, setLive] = useState("");
  const timer = useRef<number | null>(null);
  const words = useMemo(
    () => item.humanVoice.trim().split(/\s+/).filter(Boolean),
    [item.humanVoice],
  );
  const intent = getIntentRecord(item.slug);
  const inCount = words.length;
  const outCount = fieldCount(item);
  const stagger = 16;
  const fadeMs = inCount * stagger + 200;
  const fading = step === "numbers" && live === "stripping";

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => {
      media.removeEventListener("change", update);
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  function goNumbers() {
    if (reduceMotion) {
      setStep("numbers");
      setLive("File A. Leftover numbers.");
      return;
    }
    setStep("numbers");
    setLive("stripping");
    timer.current = window.setTimeout(() => {
      setLive("File A. Leftover numbers.");
    }, fadeMs);
  }

  function goIntent() {
    if (timer.current) window.clearTimeout(timer.current);
    setStep("intent");
    setLive("File B. Labeled feelings for the carousel.");
  }

  function goSketch() {
    setStep("sketch");
    setLive("A sketch of how the two files trade.");
  }

  function reset() {
    if (timer.current) window.clearTimeout(timer.current);
    setStep("words");
    setLive("Demo reset. The paragraph is back.");
  }

  const numbersReady = step === "numbers" && live !== "stripping";
  const showTicket = numbersReady;
  const showWords = step === "words" || fading;

  return (
    <div className="corpus-demo">
      <ol className="machine mb-6 grid gap-1 text-[13px]">
        <StepMark n={1} label="the words" current={step === "words"} />
        <StepMark n={2} label="file A, numbers" current={step === "numbers"} />
        <StepMark n={3} label="file B, the why" current={step === "intent"} />
        <StepMark n={4} label="how they trade" current={step === "sketch"} />
      </ol>

      <p className="mb-4 max-w-[50ch] text-[15px] text-ink-soft">
        {step === "words" &&
          "Same paragraph. Two training files. Press the dark button."}
        {fading && "Watch the words leave."}
        {numbersReady &&
          `${inCount} words in. ${outCount} fields out. That is what most models train on.`}
        {step === "intent" &&
          "Now the same words, kept as feelings a model can train on."}
        {step === "sketch" &&
          "Each line starts with $100. Watch what that $100 becomes."}
      </p>

      {showWords ? (
        <div className="gap-well mb-5">
          <p className="machine mb-3 text-[13px] text-human">
            {MICROCOPY.humanVoice}
          </p>
          <p className="display text-[21px] leading-[1.5] text-human md:text-[27px]">
            {words.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="gap-word inline"
                style={{
                  opacity: fading ? 0 : 1,
                  transition: reduceMotion
                    ? "none"
                    : `opacity 280ms cubic-bezier(.2,.7,.3,1) ${index * stagger}ms`,
                }}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
      ) : null}

      {showTicket ? (
        <div className="mb-5">
          <p className="machine mb-3 text-[13px] text-machine">
            file A · leftover numbers
          </p>
          <MachineTicket item={item} />
        </div>
      ) : null}

      {step === "intent" ? <IntentFile item={item} /> : null}

      {step === "sketch" ? <TradeSketch /> : null}

      <div className="mt-5 flex flex-wrap gap-3">
        {step === "words" ? (
          <button type="button" className="gap-button" onClick={goNumbers}>
            Keep the numbers
          </button>
        ) : null}
        {numbersReady ? (
          <button type="button" className="gap-button" onClick={goIntent}>
            Keep the why
          </button>
        ) : null}
        {step === "intent" ? (
          <button type="button" className="gap-button" onClick={goSketch}>
            See them trade
          </button>
        ) : null}
        {step !== "words" ? (
          <button type="button" className="gap-button-quiet" onClick={reset}>
            Start over
          </button>
        ) : null}
      </div>
      <p className="sr-only" aria-live="polite">
        {live === "stripping" ? "The reasoning is being stripped." : live}
      </p>
    </div>
  );
}

function StepMark({
  n,
  label,
  current,
}: {
  n: number;
  label: string;
  current: boolean;
}) {
  return (
    <li
      className={`flex gap-3 ${current ? "text-human" : "text-ink-soft"}`}
      aria-current={current ? "step" : undefined}
    >
      <span className="w-4 tabular">{n}</span>
      <span>{label}</span>
    </li>
  );
}

function IntentFile({ item }: { item: ArchiveItem }) {
  const record = getIntentRecord(item.slug);
  const lower = item.humanVoice.toLowerCase();
  return (
    <div className="mb-5">
      <p className="machine mb-3 text-[13px] text-human">
        file B · labeled feelings
      </p>
      <p className="display mb-4 text-[21px] leading-[1.5] md:text-[24px]">
        {highlightCues(item.humanVoice, record.hits.map((hit) => hit.cue))}
      </p>
      <ul className="mb-4 flex flex-wrap gap-2">
        {record.hits.map((hit) => {
          const emotion = emotionById(hit.emotionId);
          if (!emotion) return null;
          const present = !hit.cue || lower.includes(hit.cue.toLowerCase());
          return (
            <li key={`${hit.emotionId}-${hit.cue}`}>
              <span className="emotion-chip">
                {emotion.name}
                {present && hit.cue ? (
                  <span className="text-ink-soft"> · {hit.cue}</span>
                ) : null}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="machine-ticket">
        <p className="machine text-[13px] text-ink-soft">into the corpus</p>
        <p className="display mt-2 text-[21px] leading-snug">{record.log}</p>
        <p className="machine mt-3 text-[13px] text-machine">
          {record.hits.length} feelings from a bank of {EMOTION_BANK.length}
        </p>
      </div>
    </div>
  );
}

function highlightCues(text: string, cues: string[]) {
  const clean = cues.filter(Boolean);
  if (clean.length === 0) return text;
  const pattern = new RegExp(
    `(${clean.map(escapeRegExp).join("|")})`,
    "gi",
  );
  const parts = text.split(pattern);
  return parts.map((part, index) => {
    const hit = clean.some(
      (cue) => part.toLowerCase() === cue.toLowerCase(),
    );
    if (hit) {
      return (
        <mark key={`${part}-${index}`} className="emotion-mark">
          {part}
        </mark>
      );
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function money(value: number) {
  return `$${value}`;
}

function TradeSketch() {
  const width = 560;
  const height = 240;
  const pad = { left: 44, right: 16, top: 16, bottom: 36 };
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;
  const min = 50;
  const max = 145;
  const x = (i: number) =>
    pad.left + (i / (leftover.length - 1)) * innerW;
  const y = (v: number) =>
    pad.top + ((max - v) / (max - min)) * innerH;
  const path = (series: number[]) =>
    series.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(v)}`).join(" ");
  const ticks = [50, 100, 140];

  return (
    <figure>
      <p className="mb-3 max-w-[50ch] text-[15px]">
        Three people start the day with $100. This is what that $100 is worth
        by the end.
      </p>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full max-w-2xl"
        role="img"
        aria-labelledby="sketch-title sketch-desc"
      >
        <title id="sketch-title">What $100 becomes</title>
        <desc id="sketch-desc">
          Everyone starts with 100 dollars. Training on leftover numbers
          finishes at 71 dollars. A person trading on fear finishes at 55
          dollars. The carousel reading the why finishes at 134 dollars.
        </desc>
        {ticks.map((tick) => (
          <g key={tick}>
            <line
              x1={pad.left}
              x2={width - pad.right}
              y1={y(tick)}
              y2={y(tick)}
              stroke="#b7c1b5"
            />
            <text
              x={pad.left - 8}
              y={y(tick) + 4}
              textAnchor="end"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="11"
              fill="#46506b"
            >
              {money(tick)}
            </text>
          </g>
        ))}
        <path d={path(leftover)} fill="none" stroke="#33648c" strokeWidth="2.5" />
        <path d={path(person)} fill="none" stroke="#8c2f23" strokeWidth="2.5" />
        <path d={path(carousel)} fill="none" stroke="#8a4a12" strokeWidth="2.5" />
        {marks.map((label, i) => (
          <text
            key={label}
            x={x(i)}
            y={height - 10}
            textAnchor="middle"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="11"
            fill="#46506b"
          >
            {label}
          </text>
        ))}
      </svg>
      <ul className="mt-4 grid max-w-md gap-2 text-[15px]">
        <li className="flex items-baseline justify-between gap-6 border-b border-rule pb-2">
          <span className="machine text-machine">numbers only</span>
          <span className="machine tabular">{money(100)} → {money(71)}</span>
        </li>
        <li className="flex items-baseline justify-between gap-6 border-b border-rule pb-2">
          <span className="machine text-loss">a person in the fear</span>
          <span className="machine tabular">{money(100)} → {money(55)}</span>
        </li>
        <li className="flex items-baseline justify-between gap-6 border-b border-rule pb-2">
          <span className="machine text-human">carousel, reading why</span>
          <span className="machine tabular">{money(100)} → {money(134)}</span>
        </li>
      </ul>
      <figcaption className="vis-caption">
        Each line is a $100 stake. The leftover-number file chases the jump
        and sells into the scare, so $100 becomes $71. A person in the same
        fear sells even harder: $100 becomes $55. The carousel reads
        bandwagon and conviction, treats the drop as crowd fear, and stays:
        $100 becomes $134. I drew this from the two files above. It is a
        sketch, not a live track record.
      </figcaption>
      <table className="data-table mt-4 max-w-xl">
        <caption className="sr-only">
          Dollars left from a 100 dollar start at each mark
        </caption>
        <thead>
          <tr>
            <th scope="col">When</th>
            <th scope="col">Numbers only</th>
            <th scope="col">Person</th>
            <th scope="col">Carousel</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((label, i) => (
            <tr key={label}>
              <td>{label}</td>
              <td className="machine">{money(leftover[i])}</td>
              <td className="machine">{money(person[i])}</td>
              <td className="machine">{money(carousel[i])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
