import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roy De La Torre | Expert WordPress & Shopify Developer – Chusie Kokoro",
  description: "Need a skilled WordPress & Shopify developer? Roy de la Torre specializes in custom web solutions, building powerful, SEO-friendly websites without page builders. Let's create something unique for your business!",
  keywords: "WordPress developer, Shopify developer, web development, custom themes, SEO optimization",
  authors: [{ name: "Roy De La Torre" }],
  openGraph: {
    title: "Custom WordPress & Shopify Websites | Built by Roy de la Torre",
    description: "Need a skilled WordPress & Shopify developer? Roy de la Torre specializes in custom web solutions, building powerful, SEO-friendly websites without page builders. Let's create something unique for your business!",
    url: "https://chuseikokoro.com",
    siteName: "Chusie Kokoro",
    images: [
      {
        url: "/portfolio/profile.png",
        width: 512,
        height: 512,
        alt: "Roy De La Torre - WordPress & Shopify Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roy De La Torre | Expert WordPress & Shopify Developer",
    description: "Need a skilled WordPress & Shopify developer? Roy de la Torre specializes in custom web solutions, building powerful, SEO-friendly websites without page builders.",
    images: ["/portfolio/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
