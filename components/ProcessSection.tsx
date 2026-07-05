import { processSteps } from "@/data/content";
import ProcessCard from "./ProcessCard";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-6xl border-t border-white/10 px-6 py-24 md:py-32">
      <Reveal stagger={false}>
        <SectionLabel>Steps I Follow</SectionLabel>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-white md:text-5xl">
          My design process
        </h2>
      </Reveal>

      <Reveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <ProcessCard key={step.index} {...step} />
        ))}
      </Reveal>
    </section>
  );
}
