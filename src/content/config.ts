import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    keywords: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = {
  posts: posts,
};
