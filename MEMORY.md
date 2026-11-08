# Project Memory

## Overview and goals

This is Radhi's personal portfolio and website, built as a fast, maintainable site and deployed with Cloudflare Pages. The longer-term direction discussed is to grow it into a useful portal, starting with practical tools for the owner. One early idea is a report-building flow that turns work updates into a concise 3–6 slide report covering KPI run rate, challenges and responses, and next steps. This is an idea, not an implemented feature.

## Tech stack

- Astro for the site and page templates.
- TypeScript for content/data modules (`.ts`).
- Astro components (`.astro`) with HTML and CSS for markup and styling.
- npm for dependencies and scripts; Node.js for local development/builds.
- Cloudflare Pages for hosting and deployment.

Check `package.json` and `astro.config.mjs` for the exact installed versions and scripts. The project should be portable to Zorin OS; use Node.js/npm and avoid relying on Windows-only paths or commands.

## Completed / known work

- The Astro portfolio website and homepage are in place.
- Homepage copy is maintained in `src/data/homeCopy.ts` and rendered by `src/pages/index.astro`.
- Shared page metadata/layout is in `src/layouts/Layout.astro`.
- A homepage scroll fix was recently completed. Recheck it on desktop and mobile after changing homepage layout or scroll-related styles.
- Cloudflare Pages project name: `radhiarrazzaaq-website` (GitHub repo `rajakjak-hue/radhiarrazzaaq-website`).
- The homepage (`/` EN, `/id/` ID) is the owner's bio link site. This session is the main builder for it.
- 2026-11-08: homepage meta title set to `Radhi Arrazzaaq - Bio Link` (EN and ID), live at radhiarrazzaaq.com. Blog and Case Studies are greyed out in the header via `siteAvailability.mjs` (both `false`); owner will switch them on later.
- 2026-11-08: workflow docs on `main` now describe the GitHub-driven Cloudflare flow; `.node-version` pins Node 22.16.0.
- `aislop scan` score is 89/100, 0 errors. Remaining notes are dev-only dependency advisories; `aislop fix -f` needs owner go-ahead.
- Owner tried a new Google Ads headline, a smaller hero title and a rewritten enquiry dialog, then rejected them and kept the existing live design. Those branches were deleted; do not redo them unless asked.

## Pending / verify

- No confirmed open bug list was available when this file was written. Check the latest Git status and preview before treating the site as release-ready.
- Re-test the homepage scroll behavior on desktop and mobile, especially after layout or navigation changes.
- The report-generation portal/tool is still an idea; requirements, data input, slide export format, and implementation have not been decided.
- Follow the project's preview approval gate before production release.
- Unpushed local files: `IDEA.md`, `MEMORY.md`, `.agents/product-marketing.md`, `.agents/skills/`. Owner has not said whether to commit or ignore them.
- Unused starter files: `README.md`, `src/components/Welcome.astro`, `src/assets/astro.svg`. Not deleted.
- Merged branches `bio-link-title` and `bio-link-title-v2` can be deleted.
- Security to-do for owner: two-step login on GitHub and Cloudflare. Dependabot alerts not enabled yet (needs owner OK).

## Agreed working and design preferences

- Treat agents as distinct roles: Product, Designer, Writer, and Engineer; Marketing is a fifth role when needed. The owner currently handles Product decisions.
- Owner prefers short replies in simple words, friendly to a digital marketer. Caveman mode (full level, from `Others/ai-skills`) was requested on 2026-11-08 until told "stop caveman".
- Before merging to `main`, make sure the approved preview matches what will go live. Check the preview against the live site first (the live site had a local-only commit once).
- Keep writing clear and concise. In casual discussion, explore ideas without automatically turning every thought into an implementation task.
- Coding-only project workflow: work from local source and text-based checks. Do not open/control browsers or use screenshots/visual inspection; provide preview URLs for the owner to inspect.
- When starting Astro locally, use background mode (`astro dev --background`) and manage it with `astro dev status`, `astro dev logs`, and `astro dev stop`.
- Website release workflow: Cloudflare Pages is connected to GitHub and builds automatically. Work on the single `preview` branch (reset it to `main` first), run `npm run build` and `aislop scan`, push it to update the fixed preview link `https://preview.radhiarrazzaaq-website.pages.dev`, wait for explicit owner approval, then merge to `main` for the production deploy. No manual `dist/` uploads. See `AGENTS.md`.

## Important project structure

```text
.
├── src/
│   ├── data/          # Homepage copy and other structured content
│   ├── layouts/       # Shared page layouts and metadata
│   └── pages/         # Astro routes, including the homepage
├── public/            # Static assets and files served as-is (for example robots.txt)
├── astro.config.mjs   # Astro configuration
├── package.json       # Dependencies and npm scripts
└── package-lock.json  # Locked npm dependency versions
```

Use `rg --files` on the new machine to confirm the current structure; this summary lists the known paths and may not include every folder.
