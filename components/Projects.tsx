import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:pb-32 md:pt-40">
      <Reveal stagger={false}>
        <SectionLabel>Selected Work</SectionLabel>
        <h1 className="mb-12 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Projects
        </h1>
      </Reveal>

      <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Reveal>
    </section>
  );
}
