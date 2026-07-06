"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Ferrofluid = dynamic(() => import("./vendor/Ferrofluid/Ferrofluid"), { ssr: false });

export default function SiteBackground() {
  const [enabled, setEnabled] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // WebGL context creation + shader compilation is one long synchronous
    // task no matter when it runs, so `requestIdleCallback` alone doesn't
    // keep it out of Total Blocking Time (idle time isn't the same as "safe
    // to block for a while"). Instead, wait for the window load event, then
    // add a fixed delay so the task lands comfortably after the page has
    // already reached Time to Interactive.
    let timeoutId: number;
    const scheduleMount = () => {
      timeoutId = window.setTimeout(() => setEnabled(true), 3000);
    };

    if (document.readyState === "complete") {
      scheduleMount();
    } else {
      window.addEventListener("load", scheduleMount, { once: true });
    }

    const onVisibilityChange = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("load", scheduleMount);
      window.clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <Ferrofluid
        dpr={Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 1.5)}
        paused={paused}
        colors={["#3a3a3a", "#5c5c5c", "#c4f000"]}
        speed={0.3}
        scale={1.9}
        turbulence={0.6}
        fluidity={0.15}
        rimWidth={0.15}
        sharpness={2}
        shimmer={1}
        glow={1.4}
        opacity={0.55}
        mouseInteraction={false}
      />
    </div>
  );
}
