import { headers } from "next/headers";
import { siteConfig } from "@/data/content";

type BreadcrumbItem = { name: string; path: string };

export default async function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
  );
}
