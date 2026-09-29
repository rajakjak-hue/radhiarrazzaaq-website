import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    lang: z.enum(['en', 'id']),
    translationKey: z.string(),
    slug: z.string(),
    title: z.string(),
    summary: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    publishDate: z.coerce.date(),
    topic: z.string(),
    draft: z.boolean().default(false),
    youtubeUrl: z.string().url().optional(),
  }),
});

export const collections = { blog };
