import { headers } from "next/headers";
import type { FaqEntry } from "@/data/content";
import FaqAccordion from "./FaqAccordion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

type FaqSectionProps = {
  label: string;
  heading: string;
  faqs: FaqEntry[];
  id?: string;
  bordered?: boolean;
};

export default async function FaqSection({
  label,
  heading,
  faqs,
  id = "faq",
  bordered = true,
}: FaqSectionProps) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <section
      id={id}
      className={`mx-auto max-w-3xl px-6 py-24 md:py-32 ${bordered ? "border-t border-white/10" : ""}`}
    >
      {/* suppressHydrationWarning: browsers hide the nonce attribute value
          after applying it (spec behavior, to prevent nonce exfiltration),
          so React reads back "" and falsely flags a hydration mismatch. */}
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Reveal stagger={false}>
        <SectionLabel>{label}</SectionLabel>
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-white md:text-5xl">
          {heading}
        </h2>
      </Reveal>

      <Reveal stagger={false}>
        <FaqAccordion faqs={faqs} />
      </Reveal>
    </section>
  );
}
