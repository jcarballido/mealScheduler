import type { FastifyInstance } from "fastify";
import fp from "fastify-plugin";
import { buildLoginController, type LoginController } from "../controllers/login.controllers.js";

async function controllersPlugin(fastify:FastifyInstance) {
  console.log("LOADING CONTROLLERS PLUGIN")
  const loginController = buildLoginController(fastify.services.loginServices)

  fastify.decorate("controllers",{
    login: loginController
  })
}

export default fp(controllersPlugin)

declare module "fastify"{
  interface FastifyInstance{
    controllers:{
      login: LoginController
    }
  }
}