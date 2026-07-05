# Portfolio

Personal portfolio for Roy De La Torre, built with Next.js (App Router), Tailwind CSS v4, and Framer Motion. Deployed as a standard server-rendered Next.js app on Vercel.

## Tech Stack

- **Next.js 15** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** for scroll reveals and counters
- **react-icons** for skill logos
- Fonts are self-hosted via `next/font` (no external font CDN requests)

## Project Structure

- `data/content.ts` — all editable site content (bio, experience, skills, projects, stats, social links)
- `components/` — one component per section
- `app/` — routes, root layout, and metadata routes (`sitemap.ts`, `robots.ts`, `manifest.ts`, `opengraph-image.tsx`)
- `middleware.ts` — issues a per-request CSP nonce
- `next.config.js` — static security headers (HSTS, X-Frame-Options, etc.)

## Editing Content

Update `data/content.ts` for bio copy, job history, skills, projects, and stats — everything else reads from there.

To swap in your real photo and résumé:
- Add `public/images/avatar.jpg` and update `components/Hero.tsx` to render it via `next/image` in place of `AvatarPlaceholder`.
- Add `public/resume.pdf` — the hero "My Resume" button already links to it.

## Security

- CSP is issued per-request from `middleware.ts` with a fresh nonce (script-src is nonce-based, no `unsafe-inline` for scripts).
- HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy are set for all routes in `next.config.js`.
- The contact email is rendered client-side (`components/ObfuscatedEmailLink.tsx`) so it isn't scrapable from static HTML.
- `console.*` calls (except `console.error`) are stripped from production builds automatically.

## Before Deploying

- Run `npm audit` and resolve any reported vulnerabilities.
- Run `npm run build` locally and confirm it completes without errors.
- Confirm environment variables (if any are added later) are **not** prefixed with `NEXT_PUBLIC_` unless they are meant to be exposed to the browser.
