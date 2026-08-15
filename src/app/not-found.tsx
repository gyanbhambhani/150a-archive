import Link from "next/link";
import { Main } from "@/components/Main";
import { MICROCOPY } from "@/content/copy";

export default function NotFound() {
  return (
    <Main>
      <h1 className="display mb-4 text-[36px] md:text-[54px]">
        {MICROCOPY.notFoundHeading}
      </h1>
      <p className="mb-6 max-w-[68ch]">{MICROCOPY.notFoundBody}</p>
      <p>
        <Link href="/browse" className="underline">
          Browse
        </Link>
      </p>
    </Main>
  );
}
