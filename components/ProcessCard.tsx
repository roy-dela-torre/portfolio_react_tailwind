import type { ProcessStep } from "@/data/content";

export default function ProcessCard({ index, title, description }: ProcessStep) {
  return (
    <div className="group rounded-2xl border border-white/10 p-8 transition-colors duration-300 hover:border-accent/50">
      <span className="text-sm font-semibold text-accent">{index}</span>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  );
}
