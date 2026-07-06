import type { Metadata } from "next";
import ProcessSection from "@/components/ProcessSection";

export const metadata: Metadata = {
  title: "My Design Process",
  description:
    "The 5-step process Roy De La Torre follows on every WordPress project: strategize, wireframe, design, develop, and quality-assure.",
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  return <ProcessSection />;
}
