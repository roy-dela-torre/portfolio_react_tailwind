import { headers } from "next/headers";
import Link from "next/link";
import type { ServiceDetailData } from "@/data/content";
import { parsePriceRange, pricing, serviceOfferLabels, shopifyPricing, siteConfig } from "@/data/content";
import BreadcrumbJsonLd from "./BreadcrumbJsonLd";
import FaqSection from "./FaqSection";
import ObfuscatedEmailLink from "./ObfuscatedEmailLink";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default async function ServiceDetail({ service }: { service: ServiceDetailData }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  const allTiers = [
    ...pricing.projects,
    ...pricing.retainers,
    ...shopifyPricing.projects,
    ...shopifyPricing.retainers,
  ];

  const offers = (serviceOfferLabels[service.slug] ?? [])
    .map((label) => allTiers.find((tier) => tier.label === label))
    .filter((tier): tier is NonNullable<typeof tier> => tier !== undefined)
    .map((tier) => {
      const range = parsePriceRange(tier.rate);
      return {
        "@type": "Offer",
        name: tier.label,
        ...(range && {
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: range.minPrice,
            maxPrice: range.maxPrice,
            priceCurrency: "USD",
          },
        }),
      };
    });

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: { "@id": `${siteConfig.url}/#person` },
    areaServed: ["Philippines", "Worldwide"],
    offers,
  };

  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/#services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />

      <section className="mx-auto max-w-3xl px-6 pb-16 pt-32 md:pb-20 md:pt-40">
        <Reveal stagger={false}>
          <SectionLabel>Services</SectionLabel>
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            {service.h1}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            {service.intro}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16 md:pb-20">
        <Reveal stagger={false}>
          <h2 className="mb-6 text-xl font-semibold text-white md:text-2xl">What&apos;s Included</h2>
          <ul className="space-y-3">
            {service.whatsIncluded.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-white/70 md:text-base"
              >
                <span className="text-accent" aria-hidden="true">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16 md:pb-20">
        <Reveal stagger={false}>
          <h2 className="mb-4 text-xl font-semibold text-white md:text-2xl">How I Work</h2>
          <p className="text-sm leading-relaxed text-white/70 md:text-base">
            Every project follows the same process — strategy, wireframes, design, development,
            and quality assurance.{" "}
            <Link href="/process" className="text-accent underline underline-offset-4">
              See my full process
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center md:pb-32">
        <Reveal stagger={false}>
          <ObfuscatedEmailLink className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-accent">
            Get in touch
          </ObfuscatedEmailLink>
        </Reveal>
      </section>

      <FaqSection label="FAQ" heading={`${service.title} FAQs`} faqs={service.faqs} />
    </>
  );
}
