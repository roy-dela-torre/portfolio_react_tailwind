import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { serviceDetails } from "@/data/content";

const service = serviceDetails["shopify-development"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: {
    canonical: "/services/shopify-development",
  },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: service.metaTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: service.metaTitle,
    description: service.metaDescription,
    images: ["/opengraph-image"],
  },
};

export default function ShopifyDevelopmentPage() {
  return <ServiceDetail service={service} />;
}
