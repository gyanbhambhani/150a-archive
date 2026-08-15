import { ExternalIcon } from "@/components/Icons";
import { MICROCOPY } from "@/content/copy";
import { computeHindsightLag, formatLag } from "@/lib/lag";
import type { ArchiveItem } from "@/lib/types";

function Row({
  term,
  value,
}: {
  term: string;
  value: string | number | string[];
}) {
  const display = Array.isArray(value) ? value.join("; ") : String(value);
  return (
    <tr>
      <th scope="row" className="machine w-[38%] text-[13px] text-ink-soft">
        {term}
      </th>
      <td className="text-[15px]">{display}</td>
    </tr>
  );
}

export function ItemRecord({ item }: { item: ArchiveItem }) {
  const lag = computeHindsightLag(item);
  return (
    <section aria-labelledby="record-heading">
      <h2 id="record-heading" className="display mb-3 text-[27px]">
        The record
      </h2>
      <table className="data-table">
        <tbody>
          <Row term="dcterms:title" value={item.title} />
          <Row term="dcterms:creator" value={item.creator} />
          {item.contributor ? (
            <Row term="dcterms:contributor" value={item.contributor} />
          ) : null}
          {item.publisher ? (
            <Row term="dcterms:publisher" value={item.publisher} />
          ) : null}
          <Row term="dcterms:created" value={item.dateCreated} />
          <Row term="dcterms:temporal" value={item.dateOfEvent} />
          <Row term="dcterms:description" value={item.description} />
          <Row term="dcterms:subject" value={item.subject} />
          <Row term="dcterms:type" value={item.type} />
          <Row term="dcterms:format" value={item.format} />
          <Row term="dcterms:identifier" value={item.identifier} />
          <Row term="dcterms:source" value={item.source} />
          <Row term="dcterms:language" value={item.language} />
          <Row term="dcterms:rights" value={item.rights} />
          {item.rightsHolder ? (
            <Row term="dcterms:rightsHolder" value={item.rightsHolder} />
          ) : null}
          {item.relation ? (
            <Row term="dcterms:relation" value={item.relation} />
          ) : null}
          <Row term="dcterms:coverage" value={item.coverage} />
          <Row term="mkt:temporalStance" value={item.temporalStance} />
          <Row term="mkt:reasoningPresence" value={item.reasoningPresence} />
          <Row
            term="mkt:affectiveRegister"
            value={item.affectiveRegister}
          />
          <Row term="mkt:affectAttribution" value={item.affectAttribution} />
          <Row
            term="mkt:machineLegibility"
            value={item.machineLegibility}
          />
          <Row term="mkt:priceOutcome" value={item.priceOutcome} />
          <Row term="mkt:lookaheadWindow" value={item.lookaheadWindow} />
          <Row term="mkt:wayOfKnowing" value={item.wayOfKnowing} />
          <Row
            term="mkt:hindsightLag"
            value={`${lag === null ? "null" : lag} (${formatLag(lag)})`}
          />
        </tbody>
      </table>
      <p className="mt-4">
        <a
          href={item.externalUrl}
          className="inline-flex items-center gap-2 text-machine underline"
        >
          {MICROCOPY.externalLink}
          <ExternalIcon />
        </a>
      </p>
    </section>
  );
}
