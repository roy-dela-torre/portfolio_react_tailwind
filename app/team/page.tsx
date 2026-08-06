import type { Metadata } from "next";
import TeamSection from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "People I Work With",
  description:
    "The network of specialists Roy De La Torre works with on WordPress and SEO projects.",
  alternates: {
    canonical: "/team",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TeamPage() {
  return <TeamSection />;
}
