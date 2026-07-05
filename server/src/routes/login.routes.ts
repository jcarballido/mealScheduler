import fastify, { type FastifyInstance } from "fastify"

async function loginRoutes(fastify: FastifyInstance){

  // const services = await buildLoginServices()
  // const controller = buildLoginController(services)

  fastify.post("/requestAccess",fastify.controllers.login.requestMagicLink)

}

export default loginRoutes
