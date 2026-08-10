import type { Metadata } from "next";
import Pricing from "@/components/Pricing";

const title = "WordPress & SEO Rates Philippines";
const description =
  "Real WordPress developer and SEO rates in the Philippines: ₱500-900/hr local, $15-30/hr international. Transparent pricing, no surprises.";
const keywords = [
  "WordPress developer rates Philippines",
  "SEO services pricing Philippines",
  "Shopify developer rates Philippines",
  "freelance web developer rates Metro Manila",
  "WordPress developer salary Philippines",
  "WordPress developer price",
  "SEO rates Philippines",
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: {
    canonical: "/pricing",
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

export default function PricingPage() {
  return <Pricing />;
}
