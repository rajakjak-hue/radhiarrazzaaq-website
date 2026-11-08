# radhiarrazzaaq.com

Personal brand and bio link site for Radhi Arrazzaaq. Built with Astro, hosted on Cloudflare Pages. English at `/`, Indonesian under `/id/`.

## Start here (new session or new helper)

Read these first:

- `AGENTS.md` / `CLAUDE.md`: rules and the release workflow.
- `MEMORY.md`: what is done, what is pending, owner preferences.
- `WRITER-BRIEF.md`: approved copy and positioning.
- `.agents/`: roles, product marketing notes, and the site builder skill.

## Where things live

| What | Where |
| :-- | :-- |
| Homepage (bio link) | `src/components/HomePage.astro`, copy in `src/data/homeCopy.ts` |
| Other page copy | `src/data/howIWorkCopy.ts`, `src/data/blogCopy.ts` |
| SEO and meta | `src/data/siteSeo.ts`, `src/layouts/Layout.astro` |
| Turn Blog / Case Studies on or off | `siteAvailability.mjs` |
| Blog posts | `src/content/blog/en`, `src/content/blog/id` |
| Profile photo | `images/` |

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` (or `astro dev --background`) |
| `npm run build` | Build to `./dist/` |
| `aislop scan` | Code quality check, run before pushing |

## Release

Use the single `preview` branch, build, `aislop scan`, push, review the fixed preview link (`preview.radhiarrazzaaq-website.pages.dev`), get the owner's approval, then merge to `main`. Production deploys automatically. Never upload `dist/` by hand. Details in `AGENTS.md`.
