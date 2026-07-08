/** @type {import('next').NextConfig} */

// Content-Security-Policy is set in middleware.ts instead of here, since it
// needs a fresh nonce per request for script-src.
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

// HSTS tells the browser to remember "always use HTTPS for this host" for up
// to 2 years. Sending it during local dev/testing over plain HTTP permanently
// bricks that host in the browser until its cached HSTS policy is cleared, so
// this is only added when actually running on Vercel (which always serves
// over HTTPS).
if (process.env.VERCEL) {
  securityHeaders.push({
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  });
}

// The root layout reads headers() to stamp a per-request CSP nonce, which
// opts pages into dynamic rendering. Next.js then streams <title>/<meta>
// tags in after the initial <head> for any user agent it doesn't recognize
// as an HTML-only bot, relying on client-side JS to relocate them — which
// real browsers do, but non-JS crawlers (e.g. Screaming Frog) don't, so they
// see titles/canonicals/meta description as "outside <head>". This extends
// Next's default bot allowlist (which already covers Googlebot, Bingbot,
// etc.) so SEO crawlers get the same blocking, non-streamed metadata.
const htmlLimitedBots =
  /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight|Screaming Frog|AhrefsBot|SemrushBot|MJ12bot/i;

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  htmlLimitedBots,
  experimental: {
    inlineCss: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
