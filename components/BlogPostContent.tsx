import { headers } from "next/headers";
import type { BlogPost } from "@/data/content";
import { siteConfig } from "@/data/content";
import BreadcrumbJsonLd from "./BreadcrumbJsonLd";
import ObfuscatedEmailLink from "./ObfuscatedEmailLink";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostContent({ post }: { post: BlogPost }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    author: { "@id": `${siteConfig.url}/#person` },
    datePublished: post.publishedDate,
    url: `${siteConfig.url}/blog/${post.slug}`,
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <article className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:pb-32 md:pt-40">
        <Reveal stagger={false}>
          <SectionLabel>Blog</SectionLabel>
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-wide text-white/50">
            <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time> · Roy De
            La Torre
          </p>
        </Reveal>

        <Reveal className="mt-10 space-y-6">
          {post.content.map((block, i) => {
            if (block.type === "paragraph") {
              return (
                <p key={i} className="text-base leading-relaxed text-white/70 md:text-lg">
                  {block.text}
                </p>
              );
            }
            if (block.type === "heading") {
              return (
                <h2 key={i} className="pt-4 text-xl font-semibold text-white md:text-2xl">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="space-y-3">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-white/70 md:text-base"
                    >
                      <span className="text-accent" aria-hidden="true">
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <div key={i} className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      {block.headers.map((header, hi) => (
                        <th key={hi} className="px-4 py-3 font-semibold text-white">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-white/10 last:border-b-0">
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-3 text-white/70">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
        </Reveal>

        <Reveal stagger={false} className="mt-16 text-center">
          <ObfuscatedEmailLink className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-accent">
            Get in touch
          </ObfuscatedEmailLink>
        </Reveal>
      </article>
    </>
  );
}
