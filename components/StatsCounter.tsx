"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import type { Stat } from "@/data/content";

export default function StatsCounter({ value, suffix, label }: Stat) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <span className="text-5xl font-bold tabular-nums text-white md:text-6xl">
        {display}
        {suffix}
      </span>
      <p className="mt-3 text-sm uppercase tracking-wide text-white/60">{label}</p>
    </div>
  );
}
