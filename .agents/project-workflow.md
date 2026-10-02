# Project Workflow Memory

**Last updated:** 2026-10-01

## Codex roles for this project

This website project has four separate Codex chats with distinct responsibilities:

| Role | Responsibility |
|------|----------------|
| Codex-Marketing Partner | Brainstorm marketing strategy, offers, audience needs, customer pain points, and campaign ideas. |
| Codex-Writer | Draft website copy and stories first, then refine the writing with the agreed page structure. |
| Codex-Designer | Own visual direction, UX structure, navigation, and marketing-side design decisions. Turn agreed direction into implementation briefs. Does not edit source code, run builds, deploy, commit, or push. |
| Codex-Engineer | Own all implementation work: edit code, build and verify the site, deploy previews, and handle approved commits, pushes, and production releases. |

Typical handoff: Marketing Partner develops ideas, Writer drafts the writing, Designer settles UX structure and visual direction with that draft, Writer refines the final copy, then Engineer implements. The user may choose to skip a step for simple work.

## Current website design workflow

- The current English site is focused on `/`, `/work/`, and `/how-i-work/`.
- The website is mobile-first and desktop-second. Evaluate and settle the phone layout first, then adapt the approved direction to larger screens.
- Preserve the Indonesian routes and older English URLs while the three focused English pages are reviewed. Indonesian visual design and navigation remain postponed.
- Current preferred direction: a modern personal consultant site with restrained editorial influence. Avoid a page that feels like a publication profile or a generic SaaS/AI-generated template.
- Preserve blue as a secondary brand color and yellow as a tertiary accent. Use them deliberately rather than removing them.
- The approved copy and navigation decisions are recorded in `WRITER-BRIEF.md`. Preview deployment remains subject to the user's review before release.

## Working preferences

- The Designer should provide structure, rationale, and an implementation-ready brief, then hand coding to Codex-Engineer. Writer owns the writing.
- Keep the user's voice approachable and direct. Do not use em dashes in website copy.
- Project agents are coding-only with respect to website inspection: do not open browsers or preview URLs, use screenshots, or perform visual inspection. Provide preview URLs for the user to review manually. Text-based source and build-output checks are allowed.
- Follow the release workflow in `AGENTS.md`: build, deploy preview, wait for explicit preview approval, then commit and push to `main` and deploy production.
