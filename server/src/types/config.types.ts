import z from "zod";

const ConfigSchema = z.object({
  "dbConnectionString": z.string(),
  "port":z.number()

})

export type ConfigType = z.infer<typeof ConfigSchema>