import Image from "next/image";
import type { Project } from "@/data/content";

export default function ProjectCard({ title, description, imageUrl, liveUrl }: Project) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 transition-transform duration-300 hover:-translate-y-1">
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View the live ${title} project (opens in a new tab)`}
        className="block"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
          <Image
            src={imageUrl}
            alt={`Screenshot of the ${title} website homepage`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
        </div>
      </a>
    </article>
  );
}
