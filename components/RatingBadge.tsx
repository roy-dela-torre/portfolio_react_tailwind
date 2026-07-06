import { FaStar } from "react-icons/fa";
import { rating } from "@/data/content";

export default function RatingBadge() {
  const stars = Array.from({ length: rating.maxScore });

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-2.5">
      <div className="flex items-center gap-1" aria-hidden="true">
        {stars.map((_, i) => (
          <FaStar
            key={i}
            className={i < Math.round(rating.score) ? "h-4 w-4 text-accent" : "h-4 w-4 text-white/20"}
          />
        ))}
      </div>
      <span className="text-sm text-white/80">
        <span className="font-semibold text-white">{rating.score.toFixed(1)}</span> {rating.label}
      </span>
    </div>
  );
}
