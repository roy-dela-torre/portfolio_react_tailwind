"use client";

import { useEffect, useState } from "react";
import type { BlogPost, BlogContentBlock } from "@/data/content";

type BlockDraft =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; itemsText: string }
  | { type: "table"; headersText: string; rowsText: string };

type PostDraft = {
  originalSlug: string | null;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywordsText: string;
  excerpt: string;
  publishedDate: string;
  blocks: BlockDraft[];
};

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function emptyDraft(): PostDraft {
  return {
    originalSlug: null,
    slug: "",
    title: "",
    metaTitle: "",
    metaDescription: "",
    keywordsText: "",
    excerpt: "",
    publishedDate: todayISO(),
    blocks: [{ type: "paragraph", text: "" }],
  };
}

function postToDraft(post: BlogPost): PostDraft {
  return {
    originalSlug: post.slug,
    slug: post.slug,
    title: post.title,
    metaTitle: post.metaTitle,
    metaDescription: post.metaDescription,
    keywordsText: post.keywords.join(", "),
    excerpt: post.excerpt,
    publishedDate: post.publishedDate,
    blocks: post.content.map((block): BlockDraft => {
      if (block.type === "list") return { type: "list", itemsText: block.items.join("\n") };
      if (block.type === "table")
        return {
          type: "table",
          headersText: block.headers.join(" | "),
          rowsText: block.rows.map((r) => r.join(" | ")).join("\n"),
        };
      return { type: block.type, text: block.text };
    }),
  };
}

function draftToPost(draft: PostDraft): BlogPost {
  return {
    slug: draft.slug,
    title: draft.title,
    metaTitle: draft.metaTitle,
    metaDescription: draft.metaDescription,
    keywords: draft.keywordsText
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean),
    excerpt: draft.excerpt,
    publishedDate: draft.publishedDate,
    content: draft.blocks.map((block): BlogContentBlock => {
      if (block.type === "list")
        return {
          type: "list",
          items: block.itemsText
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean),
        };
      if (block.type === "table") {
        const headers = block.headersText
          .split("|")
          .map((s) => s.trim())
          .filter(Boolean);
        const rows = block.rowsText
          .split("\n")
          .map((line) => line.split("|").map((s) => s.trim()))
          .filter((row) => row.some((cell) => cell.length > 0));
        return { type: "table", headers, rows };
      }
      return { type: block.type, text: block.text };
    }),
  };
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);
  const [draft, setDraft] = useState<PostDraft | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [blocked, setBlocked] = useState(false);

  async function loadPosts() {
    const res = await fetch("/api/admin/blog");
    if (res.status === 403) {
      setBlocked(true);
      return;
    }
    const data = await res.json();
    setPosts(data);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  async function handleSave() {
    if (!draft) return;
    setError(null);
    if (!draft.title.trim() || !draft.slug.trim()) {
      setError("Title and slug are required.");
      return;
    }
    setSaving(true);
    try {
      const post = draftToPost(draft);
      const res = await fetch(
        draft.originalSlug ? `/api/admin/blog?slug=${encodeURIComponent(draft.originalSlug)}` : "/api/admin/blog",
        {
          method: draft.originalSlug ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(post),
        }
      );
      const body = await res.json();
      if (!res.ok) {
        setError(body.error ?? "Save failed.");
        return;
      }
      setDraft(null);
      await loadPosts();
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(slug: string) {
    if (!confirm(`Delete "${slug}"? This can't be undone.`)) return;
    const res = await fetch(`/api/admin/blog?slug=${encodeURIComponent(slug)}`, { method: "DELETE" });
    if (res.ok) await loadPosts();
  }

  function updateBlock(index: number, next: BlockDraft) {
    if (!draft) return;
    const blocks = [...draft.blocks];
    blocks[index] = next;
    setDraft({ ...draft, blocks });
  }

  function removeBlock(index: number) {
    if (!draft) return;
    setDraft({ ...draft, blocks: draft.blocks.filter((_, i) => i !== index) });
  }

  function addBlock(type: BlockDraft["type"]) {
    if (!draft) return;
    const block: BlockDraft =
      type === "list"
        ? { type: "list", itemsText: "" }
        : type === "table"
        ? { type: "table", headersText: "", rowsText: "" }
        : { type, text: "" };
    setDraft({ ...draft, blocks: [...draft.blocks, block] });
  }

  if (blocked) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-2xl font-semibold text-white">Admin disabled</h1>
        <p className="mt-4 text-white/60">
          This dashboard only works against a local dev server (`npm run dev`). It writes directly to a file on
          disk, which isn&apos;t possible on a production deployment.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-white">Blog dashboard</h1>
      <p className="mt-2 text-sm text-white/50">
        Local-only. Saves write straight to data/blog-posts.json — commit and push when you&apos;re happy with a
        change.
      </p>

      {!draft && (
        <>
          <button
            onClick={() => setDraft(emptyDraft())}
            className="mt-8 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            + New post
          </button>

          <div className="mt-8 space-y-3">
            {posts === null && <p className="text-white/50">Loading…</p>}
            {posts?.length === 0 && <p className="text-white/50">No posts yet.</p>}
            {posts?.map((post) => (
              <div
                key={post.slug}
                className="flex items-center justify-between rounded-xl border border-white/10 px-5 py-4"
              >
                <div>
                  <p className="font-medium text-white">{post.title}</p>
                  <p className="text-xs text-white/40">
                    /blog/{post.slug} · {post.publishedDate}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setDraft(postToDraft(post))}
                    className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white hover:border-accent/50"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.slug)}
                    className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/70 hover:border-red-400/50 hover:text-red-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {draft && (
        <div className="mt-8 space-y-6">
          {error && <p className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">{error}</p>}

          <Field label="Title">
            <input
              className="input"
              value={draft.title}
              onChange={(e) => {
                const title = e.target.value;
                setDraft({
                  ...draft,
                  title,
                  slug: draft.originalSlug ? draft.slug : slugify(title),
                });
              }}
            />
          </Field>

          <Field label="Slug (used in the URL: /blog/slug)">
            <input className="input" value={draft.slug} onChange={(e) => setDraft({ ...draft, slug: e.target.value })} />
          </Field>

          <Field label="Meta title (for search engines / browser tab)">
            <input
              className="input"
              value={draft.metaTitle}
              onChange={(e) => setDraft({ ...draft, metaTitle: e.target.value })}
            />
          </Field>

          <Field label="Meta description">
            <textarea
              className="input"
              rows={2}
              value={draft.metaDescription}
              onChange={(e) => setDraft({ ...draft, metaDescription: e.target.value })}
            />
          </Field>

          <Field label="Keywords (comma-separated)">
            <input
              className="input"
              value={draft.keywordsText}
              onChange={(e) => setDraft({ ...draft, keywordsText: e.target.value })}
            />
          </Field>

          <Field label="Excerpt (shown on the blog index card)">
            <textarea
              className="input"
              rows={2}
              value={draft.excerpt}
              onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })}
            />
          </Field>

          <Field label="Published date">
            <input
              type="date"
              className="input"
              value={draft.publishedDate}
              onChange={(e) => setDraft({ ...draft, publishedDate: e.target.value })}
            />
          </Field>

          <div>
            <p className="mb-2 text-sm font-medium text-white/70">Content blocks</p>
            <div className="space-y-4">
              {draft.blocks.map((block, i) => (
                <div key={i} className="rounded-xl border border-white/10 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wide text-white/40">{block.type}</span>
                    <button onClick={() => removeBlock(i)} className="text-xs text-white/40 hover:text-red-300">
                      Remove
                    </button>
                  </div>
                  {(block.type === "paragraph" || block.type === "heading") && (
                    <textarea
                      className="input"
                      rows={block.type === "paragraph" ? 3 : 1}
                      value={block.text}
                      onChange={(e) => updateBlock(i, { ...block, text: e.target.value })}
                    />
                  )}
                  {block.type === "list" && (
                    <textarea
                      className="input"
                      rows={4}
                      placeholder="One item per line"
                      value={block.itemsText}
                      onChange={(e) => updateBlock(i, { ...block, itemsText: e.target.value })}
                    />
                  )}
                  {block.type === "table" && (
                    <div className="space-y-2">
                      <input
                        className="input"
                        placeholder="Headers, separated by |"
                        value={block.headersText}
                        onChange={(e) => updateBlock(i, { ...block, headersText: e.target.value })}
                      />
                      <textarea
                        className="input"
                        rows={4}
                        placeholder={"One row per line, cells separated by |"}
                        value={block.rowsText}
                        onChange={(e) => updateBlock(i, { ...block, rowsText: e.target.value })}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {(["paragraph", "heading", "list", "table"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => addBlock(type)}
                  className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70 hover:border-accent/50"
                >
                  + {type}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={handleSave}
              disabled={saving}
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save"}
            </button>
            <button
              onClick={() => {
                setDraft(null);
                setError(null);
              }}
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/70"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.6rem 0.9rem;
          font-size: 0.9rem;
          color: white;
        }
        .input:focus {
          outline: none;
          border-color: var(--accent);
        }
      `}</style>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-white/70">{label}</span>
      {children}
    </label>
  );
}
