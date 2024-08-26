import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  console.log('Cannot find database URL');
  process.exit(1); // Exit if the database URL is not found
}

export default defineConfig({
  schema: './src/lib/supabase/schema.ts', // Ensure this path is correct
  out: './migrations', // Ensure this path is correct
  dbCredentials: {
    url: process.env.DATABASE_URL || '',
  },
  dialect: 'postgresql', // Add the dialect to ensure Drizzle knows you're using PostgreSQL
} satisfies Config);
