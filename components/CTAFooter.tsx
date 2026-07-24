import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { cta, siteConfig, sitemapLinks, socialLinks } from "@/data/content";
import ContactForm from "./ContactForm";
import ObfuscatedEmailLink from "./ObfuscatedEmailLink";
import Reveal from "./Reveal";

export default function CTAFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-18 text-center md:py-24">
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

        <Reveal stagger={false} className="mt-10">
          <ContactForm />
        </Reveal>

        <Reveal stagger={false}>
          <p className="mt-6 text-sm text-white/60">
            Prefer email?{" "}
            <ObfuscatedEmailLink className="text-accent underline underline-offset-4">
              Email me directly
            </ObfuscatedEmailLink>
          </p>
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

        <nav aria-label="Sitemap" className="mt-14 border-t border-white/10 pt-10">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {sitemapLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-10 text-sm text-white/60">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
