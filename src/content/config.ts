import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(), 
    tags: z.array(z.string()),
    description: z.string(),
    image: z.string().optional(), 
  }),
});

export const collections = {
  blog: blogCollection,
};
