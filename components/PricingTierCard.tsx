import type { PricingTier } from "@/data/content";

export default function PricingTierCard({ label, rate, note, highlight }: PricingTier) {
  return (
    <div
      className={`rounded-2xl border p-6 transition-colors duration-300 ${
        highlight ? "border-accent/60 bg-accent/5" : "border-white/10 hover:border-accent/50"
      }`}
    >
      <h3 className="text-base font-semibold text-white">{label}</h3>
      <p className="mt-3 text-2xl font-bold text-accent">{rate}</p>
      {note && <p className="mt-3 text-sm leading-relaxed text-white/60">{note}</p>}
    </div>
  );
}
