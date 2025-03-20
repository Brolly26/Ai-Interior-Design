import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_4IV0FBMsheAi@ep-still-cloud-ac0jq9to-pooler.sa-east-1.aws.neon.tech/ai-room-redesign?sslmode=require',
  },
});
