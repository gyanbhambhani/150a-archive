"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { TAGLINE } from "@/content/plain";
import { SITE_TITLE } from "@/lib/site";

const links = [
  { href: "/", label: "Start" },
  { href: "/demo", label: "Demo" },
  { href: "/exhibit", label: "Walkthrough" },
  { href: "/browse", label: "12 items" },
  { href: "/guide", label: "How to use" },
  { href: "/data-dictionary", label: "Fields" },
  { href: "/reading-list", label: "Sources" },
  { href: "/statement", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    const active = document.activeElement;
    if (active instanceof HTMLElement && active.closest("header")) {
      active.blur();
    }
  }, [pathname]);

  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <p className="display text-[21px] leading-tight">
            <Link href="/" className="text-ink no-underline">
              {SITE_TITLE}
            </Link>
          </p>
          <p className="machine mt-1 text-[13px] text-ink-soft">{TAGLINE}</p>
        </div>
        <nav className="site-nav" aria-label="Primary">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[15px]">
            {links.map((link) => {
              const current =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    className="text-ink-soft no-underline hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
