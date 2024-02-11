import { z } from 'zod';

export const UserRegisterBodySchema = z.object({ 
  username: z.string(),
  email: z.string(), 
  password: z.string(), 
  confirmPassword: z.string()
});

export const UserRegisterSchema = z.object({
  body: UserRegisterBodySchema
});

export type UserRegistrationPayload = z.infer<typeof UserRegisterBodySchema>;

