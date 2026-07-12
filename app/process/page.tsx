import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ProcessSection from "@/components/ProcessSection";

const title = "My Design Process";
const description =
  "The 5-step process Roy De La Torre follows on every WordPress project: strategize, wireframe, design, develop, and quality-assure.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/process",
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

export default function ProcessPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Process", path: "/process" }]} />
      <ProcessSection />
    </>
  );
}
