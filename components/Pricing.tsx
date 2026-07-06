import { pricing } from "@/data/content";
import PricingTierCard from "./PricingTierCard";
import RatingBadge from "./RatingBadge";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:pb-32 md:pt-40">
      <Reveal stagger={false}>
        <SectionLabel>Rates</SectionLabel>
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Pricing</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          {pricing.intro}
        </p>
        <div className="mt-6">
          <RatingBadge />
        </div>
      </Reveal>

      <Reveal stagger={false} className="mt-16">
        <h2 className="mb-6 text-xl font-semibold text-white md:text-2xl">Hourly Rate</h2>
      </Reveal>
      <Reveal className="grid gap-6 md:grid-cols-3">
        {pricing.hourly.map((tier) => (
          <PricingTierCard key={tier.label} {...tier} />
        ))}
      </Reveal>

      <Reveal stagger={false} className="mt-16">
        <h2 className="mb-6 text-xl font-semibold text-white md:text-2xl">
          Monthly (Part-Time Retainer)
        </h2>
      </Reveal>
      <Reveal className="grid gap-6 md:grid-cols-3">
        {pricing.retainers.map((tier) => (
          <PricingTierCard key={tier.label} {...tier} />
        ))}
      </Reveal>

      <Reveal stagger={false} className="mt-16">
        <h2 className="mb-6 text-xl font-semibold text-white md:text-2xl">Per Project</h2>
      </Reveal>
      <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pricing.projects.map((tier) => (
          <PricingTierCard key={tier.label} {...tier} />
        ))}
      </Reveal>
    </section>
  );
}
