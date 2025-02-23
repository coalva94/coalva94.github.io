import { defineCollection, z } from "astro:content";
// z -> zod schema

const proyectos = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    description: z.string(),
    }),
  })


export const collections = { proyectos }
