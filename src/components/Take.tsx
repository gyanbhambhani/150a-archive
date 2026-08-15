import type { ReactNode } from "react";

export function Take({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 max-w-[68ch] border-l border-human pl-4 text-[17px] leading-snug">
      {children}
    </p>
  );
}
