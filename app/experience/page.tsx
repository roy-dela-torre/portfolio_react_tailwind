import type { Metadata } from "next";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Roy De La Torre's work history as a WordPress developer and SEO specialist across Clarvida Global Business Center, FMO Media, and SEO Hacker.",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return <Experience />;
}
