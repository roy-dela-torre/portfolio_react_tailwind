import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1 },
    { path: "/services/wordpress-development", priority: 0.9 },
    { path: "/services/seo", priority: 0.9 },
    { path: "/experience", priority: 0.8 },
    { path: "/process", priority: 0.7 },
    { path: "/projects", priority: 0.8 },
    { path: "/pricing", priority: 0.8 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
