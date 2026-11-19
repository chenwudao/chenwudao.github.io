import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: z.enum(["zh", "en"]),
    originalPath: z.string().optional(),
    repoUrl: z.string().url().optional(),
    repoLabel: z.string().optional(),
  }),
});

export const collections = { blog };
