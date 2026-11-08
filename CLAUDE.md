## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Release workflow

Cloudflare Pages is connected to the GitHub repository. Builds and deploys are automatic; do not upload `dist/` manually.

For every website change:

1. Work on the single `preview` branch. Before starting, reset it to match `main`. Never create other preview branches.
2. Build locally with `npm run build` to verify it compiles. Then run `aislop scan` and fix any errors it reports before continuing. Do not run `aislop fix -f` (aggressive: dependency changes, file removal) without the user's explicit go.
3. Commit and push `preview` to GitHub. Cloudflare Pages builds it automatically. The link is always `https://preview.radhiarrazzaaq-website.pages.dev`. Share it with the user.
4. Wait for the user's explicit approval of the preview.
5. Merge `preview` into `main`. Cloudflare Pages deploys production automatically.

Rules:

- Never push to `main` or trigger a production deploy before the user approves the preview.
- Never deploy manually with Wrangler, direct upload, or drag-and-drop unless the user explicitly asks.
- Keep `.node-version` pinned; Cloudflare uses it to select the build's Node.js version.
- The preview link stays fixed. Production branch: `main`.

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
