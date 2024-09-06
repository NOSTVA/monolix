import { ContainerModule, type interfaces } from "inversify";

import { type IUsersRepository } from "../../core/application/repositories/users.repository.interface.js";
import { UsersRepository } from "../../core/infrastructure/repositories/users.repository.js";
import { DI_SYMBOLS } from "../types.js";

const initializeModule = (bind: interfaces.Bind) => {
  bind<IUsersRepository>(DI_SYMBOLS.IUsersRepository).to(UsersRepository);
};

export const UsersModule = new ContainerModule(initializeModule);
