import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/SkillsSection";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsSection />
      <Experience />
      <ProcessSection />
      <Projects />
      <Stats />
    </>
  );
}
