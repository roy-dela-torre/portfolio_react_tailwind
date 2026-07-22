import type { Metadata } from "next";
import Pricing from "@/components/Pricing";

const title = "Pricing";
const description =
  "Hourly, retainer, and per-project rates for WordPress development, WooCommerce builds, Shopify development, site migrations, and technical SEO work with Roy De La Torre.";
const keywords = [
  "WordPress developer rates Philippines",
  "SEO services pricing Philippines",
  "Shopify developer rates Philippines",
  "freelance web developer rates Metro Manila",
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
