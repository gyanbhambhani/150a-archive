import type { ReactNode } from "react";

export function Main({
  children,
  wide = false,
}: {
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <main
      id="content"
      tabIndex={-1}
      className={`mx-auto px-4 py-10 md:px-6 ${wide ? "max-w-6xl" : "max-w-3xl"}`}
    >
      {children}
    </main>
  );
}
