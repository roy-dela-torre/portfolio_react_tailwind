import Link from "next/link";
import type { BlogPost } from "@/data/content";
import { formatDate } from "./BlogPostContent";

export default function BlogPostCard({ slug, title, excerpt, publishedDate }: BlogPost) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block rounded-2xl border border-white/10 p-8 transition-colors duration-300 hover:border-accent/50"
    >
      <p className="text-sm uppercase tracking-wide text-white/50">
        <time dateTime={publishedDate}>{formatDate(publishedDate)}</time>
      </p>
      <h3 className="mt-3 text-xl font-semibold text-white transition-colors group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-white/60">{excerpt}</p>
      <span className="mt-6 inline-block text-sm text-accent">Read more →</span>
    </Link>
  );
}
