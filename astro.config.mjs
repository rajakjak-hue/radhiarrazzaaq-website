// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { siteAvailability } from './siteAvailability.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://radhiarrazzaaq.com',
  integrations: [sitemap({
    filter: (page) => {
      const path = new URL(page).pathname;
      if (!siteAvailability.caseStudies && ['/work/', '/id/work/'].includes(path)) return false;
      if (!siteAvailability.blog && (path.startsWith('/blog/') || path.startsWith('/id/blog/'))) return false;
      return true;
    },
  })],
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
