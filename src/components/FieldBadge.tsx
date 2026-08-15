export function FieldBadge({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <span className="inline-flex items-baseline gap-1 rounded-[2px] border border-rule px-2 py-0.5 text-[13px]">
      <span className="machine text-ink-soft">{label}</span>
      <span>{value}</span>
    </span>
  );
}
