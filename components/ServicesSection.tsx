import { services } from "@/data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal stagger={false}>
          <SectionLabel>What I Do</SectionLabel>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Services
          </h2>
        </Reveal>

        <Reveal className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
