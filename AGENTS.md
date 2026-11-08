## Development

### Coding-only workspace

AI coding agents working in this project are coding assistants only.

- Do not open or control a browser, including Chrome, Edge, or the in-app browser.
- Do not use browser automation, computer-use tools, screenshots, screen capture, or visual inspection tools.
- Do not open preview URLs on the user's behalf. Provide the URL so the user can review it manually.
- Work through local source files, terminal commands, build output, and text-based checks.
- Do not use web browsing tools unless the user explicitly requests web research for the current task.
- These restrictions remain active unless the user explicitly changes them. A separate Codex agent can be created for browser or screenshot work when needed.

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Release workflow

Cloudflare Pages is connected to the GitHub repository. Builds and deploys are automatic; do not upload `dist/` manually.

For every website change:

1. Create a branch for the change.
2. Build locally with `npm run build` to verify it compiles. Then run `aislop scan` and fix any errors it reports before continuing. Do not run `aislop fix -f` (aggressive: dependency changes, file removal) without the user's explicit go.
3. Commit and push the branch to GitHub. Cloudflare Pages builds it automatically and returns a preview URL. Share that URL with the user.
4. Wait for the user's explicit approval of the preview.
5. Merge the approved branch into `main`, or push the approved change to `main`. Cloudflare Pages deploys production automatically.

Rules:

- Never push to `main` or trigger a production deploy before the user approves the preview.
- Never deploy manually with Wrangler, direct upload, or drag-and-drop unless the user explicitly asks.
- Keep `.node-version` pinned; Cloudflare uses it to select the build's Node.js version.
- Preview deployments are per branch. Production branch: `main`.

Cloudflare Pages project: `radhiarrazzaaq-website` (GitHub repo `rajakjak-hue/radhiarrazzaaq-website`).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
