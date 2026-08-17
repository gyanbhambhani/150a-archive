import Link from "next/link";
import { MICROCOPY } from "@/content/copy";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-[15px] text-ink-soft md:px-6">
        <p>{MICROCOPY.footer}</p>
        <nav aria-label="Secondary">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            <li>
              <Link href="/ai-use" className="text-ink-soft underline">
                How AI was used
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-ink-soft underline">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/browse" className="text-ink-soft underline">
                12 items
              </Link>
            </li>
            <li>
              <a href="/exports/omeka-import.csv" className="underline">
                Omeka S CSV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
