import type { ReactNode } from "react";

export function Prose({
  children,
  as: Tag = "div",
}: {
  children: ReactNode;
  as?: "div" | "article" | "section";
}) {
  return <Tag className="prose-archive measure">{children}</Tag>;
}
