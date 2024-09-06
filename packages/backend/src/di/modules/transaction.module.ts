import { ContainerModule, type interfaces } from "inversify";

import { DI_SYMBOLS } from "../types.js";
import type { ITransaction } from "../../core/application/repositories/transaction.interface.js";
import { DrizzleTransaction } from "../../core/infrastructure/repositories/transaction.js";

const initializeModule = (bind: interfaces.Bind) => {
  bind<ITransaction>(DI_SYMBOLS.ITransaction).to(DrizzleTransaction);
};

export const TransactionModule = new ContainerModule(initializeModule);
