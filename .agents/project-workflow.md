# Project Workflow Memory

**Last updated:** 2026-09-30

## Codex roles for this project

This website project has three separate Codex chats with distinct responsibilities:

| Role | Responsibility |
|------|----------------|
| Codex-Marketing Partner | Brainstorm marketing strategy, offers, audience needs, customer pain points, and campaign ideas. |
| Codex-Architect | Shape the marketing and UX direction, page structure, content hierarchy, research, and implementation briefs. Does not edit source code, run builds, deploy, commit, or push. |
| Codex-Engineer | Own all implementation work: edit code, build and verify the site, deploy previews, and handle approved commits, pushes, and production releases. |

Typical handoff: Marketing Partner develops ideas, Architect turns selected ideas into a clear structure and acceptance criteria, then Engineer implements them. The user may choose to skip a step for simple work.

## Current website design workflow

- The current design exercise is focused on the English homepage only.
- The website is mobile-first and desktop-second. Evaluate and settle the phone layout first, then adapt the approved direction to larger screens.
- Iterate on the homepage's visual direction and get the user's approval before extending the chosen system to the Indonesian homepage, How I Work, Portfolio, Blog, or article pages.
- Current preferred direction: a modern personal consultant site with restrained editorial influence. Avoid a page that feels like a publication profile or a generic SaaS/AI-generated template.
- Preserve blue as a secondary brand color and yellow as a tertiary accent. Use them deliberately rather than removing them.
- The preview currently contains an English-homepage visual experiment. Treat it as exploratory until the user approves the direction.

## Working preferences

- The Architect should provide structure, rationale, and an implementation-ready brief, then hand coding to Codex-Engineer.
- Keep the user's voice approachable and direct. Do not use em dashes in website copy.
- Project agents are coding-only with respect to website inspection: do not open browsers or preview URLs, use screenshots, or perform visual inspection. Provide preview URLs for the user to review manually. Text-based source and build-output checks are allowed.
- Follow the release workflow in `AGENTS.md`: build, deploy preview, wait for explicit preview approval, then commit and push to `main` and deploy production.
