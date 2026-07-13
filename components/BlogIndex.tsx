import { blogPosts } from "@/data/content";
import BlogPostCard from "./BlogPostCard";
import BreadcrumbJsonLd from "./BreadcrumbJsonLd";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function BlogIndex() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:pb-32 md:pt-40">
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />

      <Reveal stagger={false}>
        <SectionLabel>Writing</SectionLabel>
        <h1 className="mb-12 text-3xl font-bold tracking-tight text-white md:text-5xl">Blog</h1>
      </Reveal>

      <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} {...post} />
        ))}
      </Reveal>
    </section>
  );
}
