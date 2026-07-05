import type { ExperienceEntry } from "@/data/content";

export default function ExperienceItem({ company, role, dates, description }: ExperienceEntry) {
  return (
    <article className="group grid gap-2 border-b border-white/10 py-8 transition-colors md:grid-cols-[1fr_auto] md:items-baseline md:gap-6">
      <div>
        <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-accent md:text-2xl">
          {company}
        </h3>
        <p className="mt-1 text-white/70">{role}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">{description}</p>
      </div>
      <p className="text-sm uppercase tracking-wide text-white/50 md:text-right">{dates}</p>
    </article>
  );
}
