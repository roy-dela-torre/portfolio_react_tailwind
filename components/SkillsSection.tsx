import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import SkillsMarquee from "./SkillsMarquee";

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal stagger={false}>
          <SectionLabel>What I Work With</SectionLabel>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Skills &amp; tools
          </h2>
        </Reveal>
      </div>

      <Reveal stagger={false}>
        <SkillsMarquee />
      </Reveal>
    </section>
  );
}
