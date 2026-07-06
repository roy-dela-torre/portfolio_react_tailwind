import type { Metadata } from "next";
import TeamSection from "@/components/TeamSection";

// Template page with placeholder team data — not yet linked from nav,
// footer sitemap, or sitemap.xml. Ask to have it wired in once real names,
// links, and photos are ready.
export const metadata: Metadata = {
  title: "People I Work With",
  description:
    "The network of specialists Roy De La Torre works with on WordPress and SEO projects.",
  alternates: {
    canonical: "/team",
  },
};

export default function TeamPage() {
  return <TeamSection />;
}
