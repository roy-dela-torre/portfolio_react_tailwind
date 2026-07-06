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
};

export default function SeoServicePage() {
  return <ServiceDetail service={service} />;
}
