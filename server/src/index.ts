import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { db } from './db/index.js';

dotenv.config();

const app = Fastify({
  logger: true,
});

await app.register(cors, {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
});

app.get('/health', async () => {
  return { status: 'ok' };
});

const start = async () => {
  try {
    const port = parseInt(process.env.PORT || '3000', 10);
    const host = process.env.HOST || '0.0.0.0';

    await app.listen({ port, host });
    console.log(`Server running at http://${host}:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
