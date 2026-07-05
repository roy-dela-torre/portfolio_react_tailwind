import Image from "next/image";
import { hero } from "@/data/content";
import TickerCTA from "./TickerCTA";

export default function Hero() {
  return (
    <section id="top" className="pt-32 md:pt-40">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-widest text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {hero.eyebrow}
          </span>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.headingLines.map((line, i) => (
              <span className="line-mask" key={line}>
                <span
                  className="line-inner"
                  style={{ ["--line-delay" as string]: `${i * 0.15}s` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {hero.paragraph}
          </p>

          <div className="mt-8">
            <a
              href={hero.resumeHref}
              download
              className="inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-accent"
            >
              {hero.resumeLabel}
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[3/4] w-56 shrink-0 overflow-hidden rounded-2xl border border-white/10 md:mx-0 md:w-72">
          <Image
            src="/assets/img/profile.png"
            alt="Portrait of Roy De La Torre"
            fill
            priority
            sizes="(min-width: 768px) 18rem, 14rem"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <TickerCTA />
      </div>
    </section>
  );
}
