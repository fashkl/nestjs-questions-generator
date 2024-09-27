import { z } from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  OPENAI_API_KEY: z.string(),
  PORT: z.coerce.number().optional().default(3000),
  NODE_ENV: z.coerce.string().optional().default('development'),
});

export type Env = z.infer<typeof envSchema>;
