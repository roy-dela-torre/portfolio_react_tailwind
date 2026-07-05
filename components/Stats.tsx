import { stats } from "@/data/content";
import Reveal from "./Reveal";
import StatsCounter from "./StatsCounter";

export default function Stats() {
  return (
    <section
      aria-label="Career highlights"
      className="mx-auto max-w-6xl border-t border-white/10 px-6 py-24 md:py-32"
    >
      <Reveal className="grid gap-12 sm:grid-cols-3">
        {stats.map((stat) => (
          <StatsCounter key={stat.label} {...stat} />
        ))}
      </Reveal>
    </section>
  );
}
