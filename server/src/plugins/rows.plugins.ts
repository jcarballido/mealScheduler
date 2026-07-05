import type { FastifyInstance } from "fastify";
import { excelReader } from "../excelReader.js";
import fp from "fastify-plugin";

async function storesPlugin(fastify:FastifyInstance) {  
}

export default fp(storesPlugin)

declare module "fastify"{
  interface FastifyInstance{
  }
}