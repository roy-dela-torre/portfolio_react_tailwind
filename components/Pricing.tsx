import { headers } from "next/headers";
import { parsePriceRange, pricing, shopifyPricing } from "@/data/content";
import BreadcrumbJsonLd from "./BreadcrumbJsonLd";
import PricingTierCard from "./PricingTierCard";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default async function Pricing() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  // Only pricing.projects is included here — the hourly/retainer tiers mix
  // PHP and USD figures in the same string (e.g. "₱500–₱900/hr (~$9–16)"),
  // and parsePriceRange deliberately returns null for those rather than
  // risk publishing an incorrect numeric range.
  const offerCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Roy De La Torre — Rate Card",
    itemListElement: [...pricing.projects, ...shopifyPricing.projects].map((tier, i) => {
      const range = parsePriceRange(tier.rate);
      return {
        "@type": "Offer",
        position: i + 1,
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
    }),
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:pb-32 md:pt-40">
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />

      <Reveal stagger={false}>
        <SectionLabel>Rates</SectionLabel>
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Pricing</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          {pricing.intro}
        </p>
      </Reveal>

      <Reveal stagger={false} className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          WordPress &amp; SEO Rates
        </h2>
      </Reveal>

      <Reveal stagger={false} className="mt-10">
        <h3 className="mb-6 text-xl font-semibold text-white md:text-2xl">Hourly Rate</h3>
      </Reveal>
      <Reveal className="grid gap-6 md:grid-cols-3">
        {pricing.hourly.map((tier) => (
          <PricingTierCard key={tier.label} {...tier} />
        ))}
      </Reveal>

      <Reveal stagger={false} className="mt-16">
        <h3 className="mb-6 text-xl font-semibold text-white md:text-2xl">
          Monthly (Part-Time Retainer)
        </h3>
      </Reveal>
      <Reveal className="grid gap-6 md:grid-cols-3">
        {pricing.retainers.map((tier) => (
          <PricingTierCard key={tier.label} {...tier} />
        ))}
      </Reveal>

      <Reveal stagger={false} className="mt-16">
        <h3 className="mb-6 text-xl font-semibold text-white md:text-2xl">Per Project</h3>
      </Reveal>
      <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pricing.projects.map((tier) => (
          <PricingTierCard key={tier.label} {...tier} />
        ))}
      </Reveal>

      <Reveal stagger={false} className="mt-24">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
          Shopify Development Rates
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
          {shopifyPricing.intro}
        </p>
      </Reveal>

      <Reveal stagger={false} className="mt-10">
        <h3 className="mb-6 text-xl font-semibold text-white md:text-2xl">Hourly Rate</h3>
      </Reveal>
      <Reveal className="grid gap-6 md:grid-cols-3">
        {shopifyPricing.hourly.map((tier) => (
          <PricingTierCard key={tier.label} {...tier} />
        ))}
      </Reveal>

      <Reveal stagger={false} className="mt-16">
        <h3 className="mb-6 text-xl font-semibold text-white md:text-2xl">Retainer</h3>
      </Reveal>
      <Reveal className="grid gap-6 md:grid-cols-3">
        {shopifyPricing.retainers.map((tier) => (
          <PricingTierCard key={tier.label} {...tier} />
        ))}
      </Reveal>

      <Reveal stagger={false} className="mt-16">
        <h3 className="mb-6 text-xl font-semibold text-white md:text-2xl">Per Project</h3>
      </Reveal>
      <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shopifyPricing.projects.map((tier) => (
          <PricingTierCard key={tier.label} {...tier} />
        ))}
      </Reveal>
    </section>
  );
}
