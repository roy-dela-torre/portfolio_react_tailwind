import Image from "next/image";
import { performanceScores } from "@/data/content";

const metrics: { key: "performance" | "accessibility" | "bestPractices" | "seo"; label: string }[] = [
  { key: "performance", label: "Performance" },
  { key: "accessibility", label: "Accessibility" },
  { key: "bestPractices", label: "Best Practices" },
  { key: "seo", label: "SEO" },
];

export default function PerformanceHighlight() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="mt-16 rounded-2xl border border-white/10 p-6 md:p-10">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Proof, Not Just Promises
        </p>
        <h3 className="text-xl font-bold text-white md:text-2xl">
          This site&apos;s own PageSpeed scores
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-white/60">
          I hold my own work to the same Core Web Vitals standard I apply for clients — here&apos;s
          roydetorre.com graded by Google PageSpeed Insights.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {performanceScores.map((result) => (
            <div key={result.device} className="rounded-xl border border-white/10 p-5">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-white/5">
                <Image
                  src={result.image}
                  alt={`Google PageSpeed Insights ${result.device.toLowerCase()} report for roydetorre.com`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  {result.device}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {metrics.map((metric) => (
                  <div key={metric.key} className="text-center">
                    <div className="text-2xl font-bold text-accent">{result[metric.key]}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-wide text-white/50">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
