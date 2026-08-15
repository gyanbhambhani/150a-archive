import type { Metadata } from "next";
import { Main } from "@/components/Main";
import { Prose } from "@/components/Prose";
import { readings } from "@/content/readings";

export const metadata: Metadata = {
  title: "Reading list",
};

export default function ReadingListPage() {
  const course = readings.filter((reading) => reading.section === "course");
  const outside = readings.filter((reading) => reading.section === "outside");
  return (
    <Main>
      <Prose as="article">
        <h1>Enriched reading list</h1>
        <p>
          Annotated for a public audience. Each entry says why the reading
          matters here, then how this project used it. Course readings sit
          first because that is what the rubric asks for.
        </p>
      </Prose>
      <section className="mt-10" aria-labelledby="course-readings">
        <h2 id="course-readings" className="display mb-6 text-[27px]">
          What DigHum 150A gave me
        </h2>
        <ol className="grid gap-8">
          {course.map((reading) => (
            <li key={reading.id} id={reading.id} className="scroll-mt-8">
              <p className="machine text-[13px] text-ink-soft">
                {reading.shortCite}
              </p>
              <h3 className="display mt-1 text-[21px]">{reading.citation}</h3>
              <p className="mt-2 max-w-[68ch]">{reading.annotation}</p>
              <p className="mt-2 max-w-[68ch] text-[15px] text-ink-soft">
                How it is used: {reading.used}
              </p>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-16" aria-labelledby="outside-readings">
        <h2 id="outside-readings" className="display mb-6 text-[27px]">
          What I brought from outside the course
        </h2>
        <ol className="grid gap-8">
          {outside.map((reading) => (
            <li key={reading.id} id={reading.id} className="scroll-mt-8">
              <p className="machine text-[13px] text-ink-soft">
                {reading.shortCite}
              </p>
              <h3 className="display mt-1 text-[21px]">{reading.citation}</h3>
              <p className="mt-2 max-w-[68ch]">{reading.annotation}</p>
              <p className="mt-2 max-w-[68ch] text-[15px] text-ink-soft">
                How it is used: {reading.used}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </Main>
  );
}
