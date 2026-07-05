import Link from "next/link";
import Marquee from "./Marquee";

const REPEAT_COUNT = 8;

export default function TickerCTA() {
  return (
    <Link
      href="#contact"
      aria-label="Let's talk — go to the contact section"
      className="block border-y border-white/10 bg-black py-4 transition-colors hover:bg-white/5"
    >
      <Marquee duration={18} speedUpOnHover decorative>
        {Array.from({ length: REPEAT_COUNT }).map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-2xl font-medium uppercase tracking-tight text-white md:text-4xl"
          >
            Let&apos;s Talk
            <span className="text-accent" aria-hidden="true">
              •
            </span>
          </span>
        ))}
      </Marquee>
    </Link>
  );
}
