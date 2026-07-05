import requireEnv from "./requireEnv.js";

export const config = {
  dbConnectionString: requireEnv("DATABASE_URL"), 
  supabaseProjectURL: requireEnv("SUPABASE_URL"),

  port: Number(process.env.PORT) ?? 3000
}