import type { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

async function lookupPlugins(fastify:FastifyInstance) {
}

export default fp(lookupPlugins)

declare module "fastify"{
  interface FastifyInstance{
  }
}

