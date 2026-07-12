import Script from "next/script";

export default function GoogleAnalytics({ gaId, nonce }: { gaId: string; nonce?: string }) {
  return (
    <>
      {/* suppressHydrationWarning: browsers hide the nonce attribute value
          after applying it (spec behavior, to prevent nonce exfiltration),
          so React reads back "" and falsely flags a hydration mismatch. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
        nonce={nonce}
        suppressHydrationWarning
      />
      <Script id="gtag-init" strategy="afterInteractive" nonce={nonce} suppressHydrationWarning>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
