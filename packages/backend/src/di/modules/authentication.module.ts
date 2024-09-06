import { ContainerModule, type interfaces } from "inversify";

import { type IAuthenticationService } from "../../core/application/services/authentication.service.interface.js";
import { AuthenticationService } from "../../core/infrastructure/services/authentication.service.js";
import { DI_SYMBOLS } from "../types.js";

const initializeModule = (bind: interfaces.Bind) => {
  bind<IAuthenticationService>(DI_SYMBOLS.IAuthenticationService).to(
    AuthenticationService,
  );
};

export const AuthenticationModule = new ContainerModule(initializeModule);
