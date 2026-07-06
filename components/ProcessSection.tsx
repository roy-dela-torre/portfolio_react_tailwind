import { processSteps } from "@/data/content";
import ProcessCard from "./ProcessCard";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function ProcessSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:pb-32 md:pt-40">
      <Reveal stagger={false}>
        <SectionLabel>Steps I Follow</SectionLabel>
        <h1 className="mb-12 text-3xl font-bold tracking-tight text-white md:text-5xl">
          My design process
        </h1>
      </Reveal>

      <Reveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <ProcessCard key={step.index} {...step} />
        ))}
      </Reveal>
    </section>
  );
}
