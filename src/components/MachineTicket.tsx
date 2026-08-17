import { getMachineTicket } from "@/lib/ticket";
import type { ArchiveItem } from "@/lib/types";

export function MachineTicket({ item }: { item: ArchiveItem }) {
  const ticket = getMachineTicket(item);
  return (
    <div className="machine-ticket">
      <p className="machine text-[15px] text-ink-soft">{ticket.date}</p>
      <p className="machine mt-2 text-[27px] leading-tight text-machine">
        {ticket.symbol}
      </p>
      <table className="mt-4 w-full border-collapse text-[17px]">
        <caption className="sr-only">
          What got saved from {item.title}: {item.machineVoice}
        </caption>
        <tbody>
          {ticket.rows.map((row, index) => (
            <tr key={`${row.label}-${row.value}-${index}`}>
              <th
                scope="row"
                className="machine w-40 py-2 pr-3 text-left font-normal text-ink-soft"
              >
                {row.label}
              </th>
              <td className="machine py-2 text-machine">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
