import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";

const title = "Blog";
const description =
  "Notes on WordPress development, page builders vs. custom themes, and technical SEO from Roy De La Torre.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog",
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

export default function BlogPage() {
  return <BlogIndex />;
}
