import type { Metadata } from "next";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Hourly, retainer, and per-project rates for WordPress development, WooCommerce builds, site migrations, and technical SEO work with Roy De La Torre.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return <Pricing />;
}
