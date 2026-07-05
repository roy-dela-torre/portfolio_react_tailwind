import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl border-t border-white/10 px-6 py-24 md:py-32">
      <Reveal stagger={false}>
        <SectionLabel>Selected Work</SectionLabel>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Projects
        </h2>
      </Reveal>

      <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Reveal>
    </section>
  );
}
