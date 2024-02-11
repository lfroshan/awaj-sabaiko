import { z } from 'zod';

export const BlogCreateBodySchema = z.object({
  title: z.string(),
  description: z.string(),
  content: z.string()
});

export const BlogCreateSchema = z.object({
  body: BlogCreateBodySchema
})

export type BlogCreatePayload = z.infer<typeof BlogCreateBodySchema>;
