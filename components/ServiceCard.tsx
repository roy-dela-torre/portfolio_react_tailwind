import Link from "next/link";
import type { Service } from "@/data/content";

export default function ServiceCard({ title, description, href }: Service) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-white/10 p-8 transition-colors duration-300 hover:border-accent/50"
    >
      <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-white/60 line-clamp-4">{description}</p>
      <span className="mt-6 inline-block text-sm text-accent">Learn more →</span>
    </Link>
  );
}
