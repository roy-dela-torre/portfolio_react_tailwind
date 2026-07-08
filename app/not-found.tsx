import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-32 md:pt-40">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <Reveal stagger={false}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-widest text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            404 Error
          </span>
        </Reveal>

        <Reveal stagger={false}>
          <p className="text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl">
            404
          </p>
        </Reveal>

        <Reveal stagger={false}>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Page not found
          </h1>
        </Reveal>

        <Reveal stagger={false}>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
        </Reveal>

        <Reveal stagger={false}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-accent"
            >
              Back to Home
            </Link>
            <Link
              href="/projects"
              className="inline-block rounded-full border border-white/10 px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-accent/50 hover:text-accent"
            >
              View My Work
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
