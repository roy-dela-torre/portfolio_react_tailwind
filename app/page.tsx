import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import Stats from "@/components/Stats";
import { homepageFaqs } from "@/data/content";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <SkillsSection />
      <Stats />
      <FaqSection label="FAQ" heading="Frequently Asked Questions" faqs={homepageFaqs} />
    </>
  );
}
