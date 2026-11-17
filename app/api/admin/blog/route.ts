import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import type { BlogPost } from "@/data/content";

// This route reads/writes data/blog-posts.json directly on disk, which only
// works against a local dev server (`npm run dev`) — Vercel's serverless
// filesystem is read-only/ephemeral in production, so every write here would
// silently vanish on the next request. The 403 below is a deliberate guard,
// not just a formality: it stops the admin UI from looking like it saved
// something that didn't.
const DATA_PATH = path.join(process.cwd(), "data", "blog-posts.json");

function blockedInProduction() {
  return process.env.NODE_ENV === "production";
}

async function readPosts(): Promise<BlogPost[]> {
  const raw = await fs.readFile(DATA_PATH, "utf8");
  return JSON.parse(raw) as BlogPost[];
}

async function writePosts(posts: BlogPost[]) {
  await fs.writeFile(DATA_PATH, JSON.stringify(posts, null, 2) + "\n", "utf8");
}

function validatePost(body: unknown): body is BlogPost {
  if (!body || typeof body !== "object") return false;
  const p = body as Partial<BlogPost>;
  return (
    typeof p.slug === "string" &&
    /^[a-z0-9-]+$/.test(p.slug) &&
    typeof p.title === "string" &&
    p.title.length > 0 &&
    typeof p.metaTitle === "string" &&
    typeof p.metaDescription === "string" &&
    Array.isArray(p.keywords) &&
    typeof p.excerpt === "string" &&
    typeof p.publishedDate === "string" &&
    Array.isArray(p.content)
  );
}

export async function GET() {
  if (blockedInProduction()) {
    return NextResponse.json({ error: "Admin API is disabled in production." }, { status: 403 });
  }
  const posts = await readPosts();
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  if (blockedInProduction()) {
    return NextResponse.json({ error: "Admin API is disabled in production." }, { status: 403 });
  }
  const body = await request.json();
  if (!validatePost(body)) {
    return NextResponse.json({ error: "Invalid post payload." }, { status: 400 });
  }
  const posts = await readPosts();
  if (posts.some((p) => p.slug === body.slug)) {
    return NextResponse.json({ error: `A post with slug "${body.slug}" already exists.` }, { status: 409 });
  }
  posts.push(body);
  await writePosts(posts);
  return NextResponse.json(body, { status: 201 });
}

export async function PUT(request: NextRequest) {
  if (blockedInProduction()) {
    return NextResponse.json({ error: "Admin API is disabled in production." }, { status: 403 });
  }
  const { searchParams } = new URL(request.url);
  const originalSlug = searchParams.get("slug");
  if (!originalSlug) {
    return NextResponse.json({ error: "Missing ?slug= query param." }, { status: 400 });
  }
  const body = await request.json();
  if (!validatePost(body)) {
    return NextResponse.json({ error: "Invalid post payload." }, { status: 400 });
  }
  const posts = await readPosts();
  const index = posts.findIndex((p) => p.slug === originalSlug);
  if (index === -1) {
    return NextResponse.json({ error: `No post found with slug "${originalSlug}".` }, { status: 404 });
  }
  if (body.slug !== originalSlug && posts.some((p) => p.slug === body.slug)) {
    return NextResponse.json({ error: `A post with slug "${body.slug}" already exists.` }, { status: 409 });
  }
  posts[index] = body;
  await writePosts(posts);
  return NextResponse.json(body);
}

export async function DELETE(request: NextRequest) {
  if (blockedInProduction()) {
    return NextResponse.json({ error: "Admin API is disabled in production." }, { status: 403 });
  }
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({ error: "Missing ?slug= query param." }, { status: 400 });
  }
  const posts = await readPosts();
  const next = posts.filter((p) => p.slug !== slug);
  if (next.length === posts.length) {
    return NextResponse.json({ error: `No post found with slug "${slug}".` }, { status: 404 });
  }
  await writePosts(next);
  return NextResponse.json({ ok: true });
}
