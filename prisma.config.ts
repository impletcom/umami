import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  datasource: {
    url: env('DATABASE_URL'),
  },
  datasource: {
    url: env("DIRECT_DATABASE_URL"),
  },
});
