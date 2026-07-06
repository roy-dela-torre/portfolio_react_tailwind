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

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
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
