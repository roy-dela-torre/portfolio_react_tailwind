import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Experience from "@/components/Experience";

const title = "Experience";
const description =
  "Roy De La Torre's work history as a WordPress developer and SEO specialist across Clarvida Global Business Center, Teqon Web Solutions B.V., and SEO Hacker.";
const keywords = ["WordPress developer Philippines", "SEO specialist Metro Manila"];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

export default function ExperiencePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Experience", path: "/experience" }]} />
      <Experience />
    </>
  );
}
