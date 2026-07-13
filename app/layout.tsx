import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SiteBackground from "@/components/SiteBackground";
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
  robots: {
    index: true,
    follow: true,
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

const personId = `${siteConfig.url}/#person`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: "WordPress Developer & SEO Specialist",
  description: siteConfig.description,
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.github,
    siteConfig.social.gravatar,
    ...(siteConfig.social.upwork.includes("REPLACE_ME") ? [] : [siteConfig.social.upwork]),
    ...(siteConfig.social.onlinejobsph.includes("REPLACE_ME") ? [] : [siteConfig.social.onlinejobsph]),
  ],
  knowsAbout: ["WordPress", "SEO", "PHP", "JavaScript", "WooCommerce", "Technical SEO"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

// serviceType intentionally excludes "Shopify Development" — nothing in
// data/content.ts (skills, services, or experience) currently evidences
// Shopify work, and structured data should match what the page actually
// says. Add it here once real Shopify content exists on the site.
const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  founder: { "@id": personId },
  areaServed: ["Philippines", "Worldwide"],
  priceRange: "$250-$5000",
  serviceType: ["WordPress Development", "SEO"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Metro Manila",
    addressCountry: "PH",
  },
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
        {/* suppressHydrationWarning: browsers hide the nonce attribute value
            after applying it (spec behavior, to prevent nonce exfiltration),
            so React reads back "" and falsely flags a hydration mismatch. */}
        <script
          type="application/ld+json"
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <GoogleAnalytics gaId={siteConfig.googleAnalyticsId} nonce={nonce} />
        <SiteBackground />
        <Navbar />
        <main>{children}</main>
        <CTAFooter />
      </body>
    </html>
  );
}
