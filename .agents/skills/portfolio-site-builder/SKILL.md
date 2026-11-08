---
name: portfolio-site-builder
description: "Use when building, editing, previewing, or releasing Radhi's portfolio site (Astro + Cloudflare Pages). Loads the stack, release gate, copy/design rules, and environment gotchas."
version: 1.0.0
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [astro, portfolio, website, cloudflare-pages, build, release, mobile-first]
---

# Portfolio Site Builder

Builder playbook for `radhiarrazzaaq-website`, Radhi's personal consultant portfolio.

## What this project is

- Astro 7 static site, bilingual EN/ID. `i18n.routing.prefixDefaultLocale: false` means English lives at `/` and Indonesian at `/id/`.
- Sites: production `https://radhiarrazzaaq.com`. Cloudflare Pages project `radhiarrazzaaq-website`.
- Sources of truth, in order:
  - `WRITER-BRIEF.md` — approved copy, navigation, page scope. Copy claims here are agreed; do not rewrite them casually.
  - `.agents/project-workflow.md` — role split (Marketing / Writer / Designer / Engineer) and current design direction.
  - `.agents/product-marketing.md` — positioning material.
  - `IDEA.md` — original brief.
- Code layout: page copy in `src/data/*Copy.ts`; page shells in `src/pages/`; page bodies in `src/components/*.astro`; shared shell in `src/layouts/Layout.astro`; blog is a content collection at `src/content/blog/{en,id}/*.md` driven by `src/content.config.ts`.
- Focused English pages right now: `/`, `/work/`, `/how-i-work/`. Older English URLs (`/portfolio/`) and all Indonesian routes must keep working.

## Commands

```bash
astro dev --background    # dev server (AGENTS.md mandates background mode)
astro dev status          # / astro dev logs / astro dev stop
npm run build             # REQUIRED verification before any deploy
npm run preview
```

## Release gate — never skip a step

Cloudflare Pages is connected to the GitHub repo, so builds and deploys are automatic. Do not upload `dist/` manually.

1. Work on the single preview branch `preview`, never `preview/<name>`. Its alias `https://preview.radhiarrazzaaq-website.pages.dev` stays fixed, so Razaq's link never changes.
2. `npm run build` passes locally, then `aislop scan` reports 0 errors. Do not run `aislop fix -f` (dependency changes, file removal) without his go.
3. Describe the change to Razaq in plain text: what changed, in which language. Do not send a preview link unless he asks. STOP here.
4. Wait for his explicit go before committing or pushing. After the go, commit and push to `preview`; the alias rebuilds automatically in about a minute.
5. STOP again. Wait for explicit preview approval before any merge.
6. Only then merge into `main`. Cloudflare deploys production automatically.

Approval of a preview is not approval of production. Never merge to `main`, push to `main`, or deploy production on your own initiative. Never deploy manually with Wrangler or drag-and-drop unless asked.

## Hard rules

- **One change per iteration, one question at a time.** Razaq wants discussion and a written change list before any edit; do not batch several sections or stack questions.
- **Coding-only.** No browser, no screenshots, no computer-use, no visual inspection. Hand Razaq the preview URL to review himself. Text-based source and build-output checks are allowed.
- **Mobile-first.** Settle the phone layout first, then adapt up to larger screens.
- **No em dashes** in website copy.
- **Never invent** proof, metrics, screenshots, outcomes, or personal experience. Anonymize sensitive material.
- Preserve Indonesian routes and older English URLs.
- Homepage scope is exactly three things: contact through the primary CTA, Case Studies, Working Together. The homepage must **not** link to the blog. Blog and post pages may link back to the homepage.
- Intended reading order: result, proof, collaboration, contact.
- Blue is a secondary brand color and yellow a tertiary accent. Use them deliberately; do not remove them.
- Navigation: home link `Radhi.` to `/`; `Case Studies` to `/work/`; `Working Together` to `/how-i-work/`. Primary CTA `Discuss Your Lead Flow`.

## Design direction and tokens (`src/layouts/Layout.astro`)

Two palettes. Decide which one you are touching before styling.

- **Default (dark, older/Indonesian pages):** `--paper:#000000`, `--ink:#f4f6fa`, `--muted:#a5afbd`, `--accent:#EAD971`, `--blue:#59BAF1`, `--line:#243746`, Arial.
- **Focused English pages** (`/`, `/work`, `/how-i-work` get `class="focused-english"`): light, `--paper:#f7f5ee`, `--surface:#eeece4`, `--ink:#192126`, `--muted:#5d686d`, `--accent:#f0d65e`, `--accent-strong:#b49b36`, `--blue:#245b78`, `--blue-deep:#19445d`, `--line:#d6dbd9`, fonts Newsreader (headings) + Source Sans 3 (body).

Direction: a modern personal consultant site with restrained editorial influence. Avoid anything that reads as a publication profile or a generic SaaS/AI-generated template.

## Case study structure

Every project: **The Challenge → What I Did → The Work → The Outcome.** Screenshots are evidence inside the story, never a standalone gallery.

## Local skill packages

`ai-skills/` holds reusable skill packages (notably `marketingskills-main` with `site-architecture`, `copywriting`, `content-strategy`, `product-marketing`, `cro`). Read the relevant one before copy, architecture, or CRO work.

## Environment gotcha: Linux builds on a Windows-installed `node_modules`

This repo sits on a shared drive and its `node_modules/` was installed on Windows, so it shipped only win32 native bindings. Building on the Linux side requires the matching linux-x64 bindings, which are installed directly under `node_modules/`:

`@rolldown/binding-linux-x64-gnu`, `@bruits/satteri-linux-x64-gnu`, `@esbuild/linux-x64`, `@img/sharp-linux-x64`, `@img/sharp-libvips-linux-x64`, `lightningcss-linux-x64-gnu`, `@astrojs/compiler-binding-linux-x64-gnu`.

- Do **not** `rm -rf node_modules` or run a fresh `npm install` on Linux — that breaks the Windows build.
- To add a missing binding: `npm pack <pkg>@<exact version>` then `tar -xzf <tgz> -C node_modules/<path> --strip-components=1` and `chmod 755` the `.node` file. Keep it off `package.json` and `package-lock.json`.
- If the build fails with `Cannot find module '@<scope>/<pkg>-linux-x64-gnu'`, read the missing name straight from the error and install exactly that.
