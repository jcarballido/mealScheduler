import type { FastifyInstance } from "fastify";
import fp from "fastify-plugin";
import { buildLoginServices, type LoginServices } from "../services/login.services.js";

async function servicesPlugins(fastify:FastifyInstance) {
  console.log("LOADING SERVICES PLUGIN")
  const loginServices = buildLoginServices()

  fastify.decorate("services",{
    loginServices
  })
}

export default fp(servicesPlugins)

declare module "fastify"{
  interface FastifyInstance {
    services:{
      loginServices: LoginServices
    }
  }
}