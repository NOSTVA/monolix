import type { PgTransaction } from "drizzle-orm/pg-core";

import type { ITransaction } from "../../application/repositories/transaction.interface.js";
import type { PostgresJsQueryResultHKT } from "drizzle-orm/postgres-js";
import { db, type DrizzleDatabase } from "../../../drizzle/index.js";
import * as schema from "../../../drizzle/schema/index.js";
import type { ExtractTablesWithRelations } from "drizzle-orm";
import { injectable } from "inversify";

export type DrizzleTransactionScope = PgTransaction<
  PostgresJsQueryResultHKT,
  typeof schema,
  ExtractTablesWithRelations<typeof schema>
>;

export type DrizzleConnection = DrizzleDatabase | DrizzleTransactionScope;

@injectable()
export class DrizzleTransaction implements ITransaction {
  create = db.transaction;
}
