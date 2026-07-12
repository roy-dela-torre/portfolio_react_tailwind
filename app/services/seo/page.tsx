import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { serviceDetails } from "@/data/content";

const service = serviceDetails.seo;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "/services/seo",
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

export default function SeoServicePage() {
  return <ServiceDetail service={service} />;
}
