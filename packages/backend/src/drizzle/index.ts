import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";

import * as schema from "./schema/index.js";
import { log } from "../core/log.js";
import env from "../core/env.js";

const client = new Pool({
  connectionString: env.POSTGRES_DATABASE_URL,
  ssl: env.ENV === "production",
});

client.on("connect", () => {
  log.info("Connected to PostgreSQL database.");
});

const db = drizzle(client, { schema, logger: false });

const luciaAdapter = new DrizzlePostgreSQLAdapter(
  db,
  schema.sessions,
  schema.users,
);

export { db, luciaAdapter };
export type DrizzleDatabase = typeof db;
