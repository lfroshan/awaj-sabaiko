import { z } from 'zod';

export const UserLoginBodySchema = z.object({
  username: z.string(),
  password: z.string()
});

export const UserLoginSchema = z.object({
  body: UserLoginBodySchema
})

export type UserLoginPayload = z.infer<typeof UserLoginBodySchema>;
