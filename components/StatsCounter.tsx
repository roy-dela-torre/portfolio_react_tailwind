import type { Stat } from "@/data/content";

export default function StatsCounter({ value, suffix, label }: Stat) {
  return (
    <div className="text-center md:text-left">
      <span className="text-5xl font-bold tabular-nums text-white md:text-6xl">
        {value}
        {suffix}
      </span>
      <p className="mt-3 text-sm uppercase tracking-wide text-white/60">{label}</p>
    </div>
  );
}
