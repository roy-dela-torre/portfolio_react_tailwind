"use client";

import { useState } from "react";
import { experience } from "@/data/content";
import ExperienceItem from "./ExperienceItem";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const VISIBLE_COUNT = 2;

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? experience : experience.slice(0, VISIBLE_COUNT);
  const hasMore = experience.length > VISIBLE_COUNT;

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal stagger={false}>
        <SectionLabel>Work History</SectionLabel>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Where I&apos;ve worked
        </h2>
      </Reveal>

      <Reveal>
        {visible.map((entry) => (
          <ExperienceItem key={entry.company} {...entry} />
        ))}
      </Reveal>

      {hasMore && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="mt-10 rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-black"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
}
