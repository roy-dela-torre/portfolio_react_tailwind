import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/content";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#000000",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, backgroundColor: "#c4f000" }} />
          <span style={{ fontSize: 28, textTransform: "uppercase", letterSpacing: 4, color: "#c4f000" }}>
            Available for work
          </span>
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 36, marginTop: 24, color: "#ffffffaa" }}>
          WordPress Developer & SEO Specialist
        </div>
      </div>
    ),
    { ...size }
  );
}
