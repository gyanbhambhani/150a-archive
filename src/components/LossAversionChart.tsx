import { Cite } from "@/components/Cite";

export function LossAversionChart() {
  const width = 480;
  const height = 260;
  const zero = 40;
  const gainH = 70;
  const lossH = Math.round(70 * 2.25);
  return (
    <figure>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full max-w-xl"
        role="img"
        aria-labelledby="loss-title loss-desc"
      >
        <title id="loss-title">Loss aversion intensity</title>
        <desc id="loss-desc">
          A bar at plus 1 in amber and a bar at minus 2.25 in oxblood.
          Subjective intensity is asymmetric.
        </desc>
        <line
          x1={24}
          x2={width - 24}
          y1={height / 2}
          y2={height / 2}
          stroke="#16213d"
        />
        <rect
          x={zero + 80}
          y={height / 2 - gainH}
          width={72}
          height={gainH}
          fill="#b9701a"
        />
        <rect
          x={zero + 220}
          y={height / 2}
          width={72}
          height={lossH}
          fill="#8c2f23"
        />
        <text
          x={zero + 116}
          y={height / 2 - gainH - 10}
          textAnchor="middle"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="13"
          fill="#16213d"
        >
          +1
        </text>
        <text
          x={zero + 256}
          y={height / 2 + lossH + 18}
          textAnchor="middle"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="13"
          fill="#16213d"
        >
          -2.25
        </text>
        <text
          x={24}
          y={20}
          fontFamily="IBM Plex Mono, monospace"
          fontSize="12"
          fill="#46506b"
        >
          subjective intensity
        </text>
      </svg>
      <figcaption className="vis-caption">
        Losing a dollar hurts more than gaining a dollar feels good, by about
        two to one. Kahneman and Tversky, 1979.{" "}
        <Cite id="prospect" />
      </figcaption>
      <p className="mt-3 text-[15px] text-ink-soft">
        A gain of one unit is drawn at height 1. A loss of one unit is drawn at
        height 2.25. The zero line is visible between them.
      </p>
      <table className="data-table max-w-md">
        <caption className="sr-only">Loss aversion intensities</caption>
        <thead>
          <tr>
            <th scope="col">Outcome</th>
            <th scope="col">Subjective intensity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gain</td>
            <td className="machine">+1</td>
          </tr>
          <tr>
            <td>Loss</td>
            <td className="machine">-2.25</td>
          </tr>
        </tbody>
      </table>
    </figure>
  );
}
