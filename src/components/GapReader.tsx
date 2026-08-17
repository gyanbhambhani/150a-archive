"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Cite } from "@/components/Cite";
import { MachineTicket } from "@/components/MachineTicket";
import { MICROCOPY } from "@/content/copy";
import { fieldCount } from "@/lib/ticket";
import type { ArchiveItem } from "@/lib/types";

type Phase = "idle" | "fading" | "gone";

export function GapReader({
  item,
  mode = "single",
}: {
  item: ArchiveItem;
  mode?: "single" | "gallery";
}) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [live, setLive] = useState("");
  const timer = useRef<number | null>(null);
  const words = useMemo(
    () => item.humanVoice.trim().split(/\s+/).filter(Boolean),
    [item.humanVoice],
  );
  const inCount = words.length;
  const outCount = fieldCount(item);
  const stagger = 18;
  const fadeMs = inCount * stagger + 240;
  const counter = `${inCount} words in. ${outCount} fields out.`;
  const stripped = phase !== "idle";

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

  function strip() {
    if (reduceMotion) {
      setPhase("gone");
      setLive(`${MICROCOPY.stripAnnounce} ${counter}`);
      return;
    }
    setPhase("fading");
    setLive("The reasoning is being stripped.");
    timer.current = window.setTimeout(() => {
      setPhase("gone");
      setLive(`${MICROCOPY.stripAnnounce} ${counter}`);
    }, fadeMs);
  }

  function restore() {
    if (timer.current) window.clearTimeout(timer.current);
    setPhase("idle");
    setLive(MICROCOPY.restoreAnnounce);
  }

  return (
    <div className="gap-stage">
      {mode === "gallery" ? (
        <h3 className="display mb-3 text-[21px]">{item.title}</h3>
      ) : null}

      <noscript>
        <p className="mb-3 text-[15px] text-ink-soft">
          {MICROCOPY.noscriptGap}
        </p>
        <p className="machine mb-2 text-[13px] text-human">
          {MICROCOPY.humanVoice}
        </p>
        <p className="display mb-6 text-[21px] leading-[1.5]">
          {item.humanVoice}
        </p>
        <p className="machine mb-2 text-[13px] text-machine">
          {MICROCOPY.machineVoice}
        </p>
        <MachineTicket item={item} />
        <style>{`.gap-js { display: none !important; }`}</style>
      </noscript>

      <div className="gap-js">
        <p className="mb-4 max-w-[46ch] text-[15px] text-ink-soft">
          {phase === "idle"
            ? "Press the dark button. The paragraph fades. Then you get the leftover numbers."
            : phase === "fading"
              ? "Watch the words leave."
              : counter}
        </p>

        <div className="mb-5">
          <button
            type="button"
            onClick={() => (stripped ? restore() : strip())}
            className="gap-button"
            disabled={phase === "fading"}
          >
            {stripped ? MICROCOPY.stripActive : MICROCOPY.stripDefault}
          </button>
        </div>

        <p className="machine mb-3 text-[13px]">
          <span className={phase === "gone" ? "text-machine" : "text-human"}>
            {phase === "gone"
              ? MICROCOPY.machineVoice
              : MICROCOPY.humanVoice}
          </span>
        </p>

        <div className="gap-well">
        {phase === "gone" ? (
          <MachineTicket item={item} />
        ) : (
            <p className="display text-[21px] leading-[1.5] text-human md:text-[27px]">
              {words.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className="gap-word inline"
                  style={{
                    opacity: phase === "fading" ? 0 : 1,
                    transition: reduceMotion
                      ? "none"
                      : `opacity 280ms cubic-bezier(.2,.7,.3,1) ${index * stagger}ms`,
                  }}
                >
                  {word}{" "}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {live}
      </p>
      <p className="vis-caption mt-5">
        Luiselli&apos;s form drops what does not fit a field.{" "}
        <Cite id="luiselli" /> Baca says a field you decline to create is a
        question a future user cannot ask. <Cite id="baca" />
      </p>
    </div>
  );
}
