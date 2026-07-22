import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Projects from "@/components/Projects";

const title = "Projects";
const description =
  "A selection of custom WordPress and WooCommerce sites built by Roy De La Torre for clients across the Philippines and internationally.";
const keywords = [
  "WordPress developer portfolio Philippines",
  "WooCommerce developer Metro Manila",
  "custom WordPress theme examples Philippines",
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: {
    canonical: "/projects",
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

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }]} />
      <Projects />
    </>
  );
}
