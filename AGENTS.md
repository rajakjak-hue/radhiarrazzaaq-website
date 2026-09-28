## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Release workflow

For every website change:

1. Build the site with `npm.cmd run build`.
2. Deploy `dist/` to the Cloudflare Pages `preview` branch for review.
3. Wait for the user's explicit approval of the preview.
4. Commit the approved change to Git and push it to the `main` branch.
5. Deploy the approved `dist/` build to the Cloudflare Pages production branch.

Cloudflare Pages project: `radhiarrazzaaq-website`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
