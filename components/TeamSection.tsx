import { teamMembers } from "@/data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import TeamCarousel from "./TeamCarousel";

export default function TeamSection() {
  return (
    <section className="pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal stagger={false}>
          <SectionLabel>My Network</SectionLabel>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
            People I Work With
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            I don&apos;t work alone on every project. Here&apos;s the network of specialists I
            bring in when a project calls for it.
          </p>
        </Reveal>
      </div>

      <div className="mt-12">
        <TeamCarousel members={teamMembers} />
      </div>
    </section>
  );
}
