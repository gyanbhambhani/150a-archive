"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Cite } from "@/components/Cite";
import { computeHindsightLag, formatLag } from "@/lib/lag";
import type { ArchiveItem, TemporalStance } from "@/lib/types";

function symlog(value: number): number {
  const c = 12;
  return Math.sign(value) * Math.log10(1 + Math.abs(value) / c);
}

const stanceShape: Record<TemporalStance, string> = {
  contemporaneous: "circle",
  predictive: "triangle",
  retrospective: "square",
  theoretical: "diamond",
};

const stanceFill: Record<TemporalStance, string> = {
  contemporaneous: "#8a4a12",
  predictive: "#8c2f23",
  retrospective: "#33648c",
  theoretical: "#46506b",
};

function Shape({
  kind,
  x,
  y,
  fill,
  selected,
}: {
  kind: string;
  x: number;
  y: number;
  fill: string;
  selected: boolean;
}) {
  const stroke = selected ? "#16213d" : fill;
  if (kind === "square") {
    return (
      <rect
        x={x - 6}
        y={y - 6}
        width={12}
        height={12}
        fill={fill}
        stroke={stroke}
        strokeWidth={selected ? 2 : 1}
      />
    );
  }
  if (kind === "triangle") {
    return (
      <polygon
        points={`${x},${y - 8} ${x + 8},${y + 7} ${x - 8},${y + 7}`}
        fill={fill}
        stroke={stroke}
        strokeWidth={selected ? 2 : 1}
      />
    );
  }
  return (
    <circle
      cx={x}
      cy={y}
      r={6}
      fill={fill}
      stroke={stroke}
      strokeWidth={selected ? 2 : 1}
    />
  );
}

export function LagPlot({ items }: { items: ArchiveItem[] }) {
  const rows = useMemo(() => {
    return items
      .map((item, index) => ({
        item,
        lag: computeHindsightLag(item),
        jitter: index,
      }))
      .filter(
        (row): row is { item: ArchiveItem; lag: number; jitter: number } =>
          row.lag !== null,
      )
      .sort((a, b) => a.lag - b.lag);
  }, [items]);

  const [active, setActive] = useState(0);
  const width = 720;
  const height = 280;
  const pad = { left: 36, right: 24, top: 24, bottom: 48 };
  const lags = rows.map((row) => row.lag);
  const min = Math.min(-20, ...lags);
  const max = Math.max(40, ...lags);
  const xOf = (lag: number) => {
    const t =
      (symlog(lag) - symlog(min)) / (symlog(max) - symlog(min) || 1);
    return pad.left + t * (width - pad.left - pad.right);
  };
  const yOf = (index: number) => {
    const inner = height - pad.top - pad.bottom;
    const t = rows.length <= 1 ? 0.5 : index / (rows.length - 1);
    return pad.top + 24 + t * (inner - 48);
  };
  const zeroX = xOf(0);

  return (
    <figure>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-labelledby="lagplot-title lagplot-desc"
      >
        <title id="lagplot-title">How late each record was written</title>
        <desc id="lagplot-desc">
          Single-axis scatter of days between event and record. Y axis is
          jitter only.
        </desc>
        <line
          x1={pad.left}
          x2={width - pad.right}
          y1={height - pad.bottom}
          y2={height - pad.bottom}
          stroke="#b7c1b5"
        />
        <line
          x1={zeroX}
          x2={zeroX}
          y1={pad.top}
          y2={height - pad.bottom}
          stroke="#16213d"
          strokeDasharray="3 3"
        />
        <text
          x={zeroX + 8}
          y={pad.top + 12}
          className="machine"
          fill="#46506b"
          fontSize="11"
        >
          the moment the outcome became known
        </text>
        <text
          x={pad.left}
          y={height - 16}
          fill="#46506b"
          fontSize="11"
          fontFamily="IBM Plex Mono, monospace"
        >
          earlier than the event
        </text>
        <text
          x={width - pad.right}
          y={height - 16}
          textAnchor="end"
          fill="#46506b"
          fontSize="11"
          fontFamily="IBM Plex Mono, monospace"
        >
          later than the event
        </text>
        <text
          x={12}
          y={height / 2}
          fill="#46506b"
          fontSize="11"
          fontFamily="IBM Plex Mono, monospace"
          transform={`rotate(-90 12 ${height / 2})`}
        >
          jitter, no meaning
        </text>
        {rows.map((row, index) => {
          const x = xOf(row.lag);
          const y = yOf(index);
          const selected = index === active;
          return (
            <g key={row.item.slug}>
              <a href={`/items/${row.item.slug}`}>
                <Shape
                  kind={stanceShape[row.item.temporalStance]}
                  x={x}
                  y={y}
                  fill={stanceFill[row.item.temporalStance]}
                  selected={selected}
                />
              </a>
              <foreignObject x={x - 8} y={y - 8} width="16" height="16">
                <button
                  type="button"
                  aria-label={`${row.item.title}, ${formatLag(row.lag)}, ${row.item.temporalStance}`}
                  className="h-4 w-4 cursor-pointer bg-transparent"
                  onFocus={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                      event.preventDefault();
                      setActive((current) => (current + 1) % rows.length);
                    }
                    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                      event.preventDefault();
                      setActive(
                        (current) =>
                          (current - 1 + rows.length) % rows.length,
                      );
                    }
                  }}
                />
              </foreignObject>
            </g>
          );
        })}
      </svg>
      {rows[active] ? (
        <p className="machine mt-2 text-[13px] text-ink-soft">
          {rows[active].item.title}. {formatLag(rows[active].lag)}. Stance:{" "}
          {rows[active].item.temporalStance}.
        </p>
      ) : null}
      <figcaption className="vis-caption">
        Distance in days between when a market event happened and when the
        record about it was made. Every test of past trades sits on the right
        side of the line by construction. Wintjes argues that pictures in an
        archive can carry an argument rather than illustrate one,{" "}
        <Cite id="wintjes" /> and this plot is the argument of this project in
        a single axis. Drucker&apos;s warning applies too: the chart presents
        my coding decisions as if they were observations, so the underlying
        values are in the table below.
      </figcaption>
      <p className="mt-3 text-[15px] text-ink-soft">
        Lags in this view range from{" "}
        <span className="machine">{Math.min(...lags)}</span> to{" "}
        <span className="machine">{Math.max(...lags)}</span> days. Predictive
        and same-day records sit near zero. Retrospective federal reports sit
        months out. The model-generated item sits years out.
      </p>
      <table className="data-table">
        <caption className="sr-only">How late each record was written</caption>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Lag (days)</th>
            <th scope="col">Stance</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.item.slug}>
              <td>
                <Link href={`/items/${row.item.slug}`}>{row.item.title}</Link>
              </td>
              <td className="machine">{row.lag}</td>
              <td>{row.item.temporalStance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
