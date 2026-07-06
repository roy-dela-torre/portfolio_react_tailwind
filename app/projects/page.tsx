import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of custom WordPress and WooCommerce sites built by Roy De La Torre for clients across the Philippines and internationally.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <Projects />;
}
