import { readingById } from "@/content/readings";

export function Cite({ id }: { id: string }) {
  const reading = readingById[id];
  const label = reading?.shortCite ?? id;
  return (
    <sup className="cite">
      <a href={`/reading-list#${id}`} aria-label={`Citation: ${label}`}>
        {label}
      </a>
    </sup>
  );
}
