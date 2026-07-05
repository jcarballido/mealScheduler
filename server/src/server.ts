import Fastify, { type FastifyInstance } from "fastify"
import "dotenv/config"
import loginRoutes from "./routes/login.routes.js"
import controllersPlugins from "./plugins/controllers.plugins.js"
import servicesPlugins from "./plugins/services.plugins.js"
import domainExecutionPlugins from "./plugins/domainExecution.plugins.js"
import configPlugins from "./plugins/config.plugins.js"
import queriesPlugins from "./plugins/queries.plugins.js"
import rowsPlugins from "./plugins/rows.plugins.js"
import lookupPlugins from "./plugins/lookup.plugins.js"

const fastify: FastifyInstance = Fastify({
  logger: true
})
// Register plugins
fastify.register(configPlugins)
fastify.register(queriesPlugins) // Interface with persistent storage
fastify.register(rowsPlugins) // Interface to parse spreadsheet files
fastify.register(lookupPlugins) // Interface to query parsed spreadsheet files
fastify.register(domainExecutionPlugins) // Interface for business logic 
fastify.register(servicesPlugins) // Access domain execution logic
fastify.register(controllersPlugins) // Assign http request to service handler

// Register routes 
fastify.register(loginRoutes, {prefix:"/login"})


const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()