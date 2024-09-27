import { z } from 'zod';
export declare const envSchema: z.ZodObject<{
    DATABASE_URL: z.ZodString;
    OPENAI_API_KEY: z.ZodString;
    PORT: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    NODE_ENV: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    DATABASE_URL?: string;
    OPENAI_API_KEY?: string;
    PORT?: number;
    NODE_ENV?: string;
}, {
    DATABASE_URL?: string;
    OPENAI_API_KEY?: string;
    PORT?: number;
    NODE_ENV?: string;
}>;
export type Env = z.infer<typeof envSchema>;
