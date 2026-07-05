import { FaEnvelope } from "react-icons/fa";
import { cta, siteConfig, socialLinks } from "@/data/content";
import ObfuscatedEmailLink from "./ObfuscatedEmailLink";
import Reveal from "./Reveal";

export default function CTAFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
        <Reveal stagger={false}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-widest text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {cta.eyebrow}
          </span>
        </Reveal>

        <Reveal stagger={false}>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {cta.heading}
          </h2>
        </Reveal>

        <Reveal stagger={false}>
          <ObfuscatedEmailLink className="mt-10 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-accent">
            {cta.buttonLabel}
          </ObfuscatedEmailLink>
        </Reveal>

        <ul className="mt-14 flex items-center justify-center gap-6">
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors duration-300 hover:border-accent/50 hover:text-accent"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          ))}
          <li>
            <ObfuscatedEmailLink
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors duration-300 hover:border-accent/50 hover:text-accent"
            >
              <FaEnvelope className="h-5 w-5" aria-hidden="true" />
            </ObfuscatedEmailLink>
          </li>
        </ul>

        <p className="mt-14 text-sm text-white/60">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
