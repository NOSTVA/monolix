import env from "../core/env.js";

export default {
  dialect: "postgresql",
  schema: "./dist/drizzle/schema/index.js",
  out: "./migrations",
  dbCredentials: {
    url: env.POSTGRES_DATABASE_URL,
  },
};
