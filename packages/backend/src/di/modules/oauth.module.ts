import { ContainerModule, type interfaces } from "inversify";

import { DI_SYMBOLS } from "../types.js";
import type { IOAuthRepository } from "../../core/application/repositories/oauth.repository.interface.js";
import { OAuthRepository } from "../../core/infrastructure/repositories/oauth.repository.js";

const initializeModule = (bind: interfaces.Bind) => {
  bind<IOAuthRepository>(DI_SYMBOLS.IOAuthRepository).to(OAuthRepository);
};

export const OAuthModule = new ContainerModule(initializeModule);
