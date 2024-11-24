import { z } from 'zod';

const envSchema = z.object({
  TELEGRAM_TOKEN: z.string().min(1, "TELEGRAM_TOKEN is required in env"),
  DB_NAME: z.string().min(1, "Db name not available in env"),
  DB_USER: z.string().min(1, "Db user not available in env"),
  DB_PASS: z.string().min(1, "Db password is not available in env"),
  DB_HOST: z.string().min(1, "Db HOST is not available in env"),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().min(1, "PORT Is not defined"),
  DB_PORT: z.string().min(1, "Db port is not specified")
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error('Invalid environment variables:', env.error.format());
  process.exit(1);
}
console.log(env)

export const Config = env.data;