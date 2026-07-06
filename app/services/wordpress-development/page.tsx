import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { serviceDetails } from "@/data/content";

const service = serviceDetails["wordpress-development"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: "/services/wordpress-development",
  },
};

export default function WordPressDevelopmentPage() {
  return <ServiceDetail service={service} />;
}
