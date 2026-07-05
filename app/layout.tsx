import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import { siteConfig } from "@/data/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: "WordPress Developer & SEO Specialist",
  description: siteConfig.description,
  sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
  knowsAbout: ["WordPress", "SEO", "PHP", "JavaScript", "WooCommerce", "Technical SEO"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

// Reading headers() here opts this layout into per-request dynamic
// rendering, which Next.js requires in order to stamp a fresh nonce onto
// the scripts it manages (https://nextjs.org/docs/app/guides/content-security-policy).
// A side effect is that <title>/<meta> tags are streamed in a separate
// chunk rather than the initial <head> — present in the final HTML and
// correctly relocated by spec-compliant browsers, but worth knowing if a
// crawler ever appears not to wait for it.
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <CTAFooter />
      </body>
    </html>
  );
}
