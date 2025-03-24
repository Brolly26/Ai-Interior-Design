import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://aiDesign_owner:npg_TSsm3U6uDBkP@ep-hidden-sun-a51m7h8i.us-east-2.aws.neon.tech/aiDesign?sslmode=require',
  },
});
