import { ContainerModule, type interfaces } from "inversify";

import { IMailerService } from "../../core/application/services/mailer.service.interface.js";
import { MailerService } from "../../core/infrastructure/services/mailer.service.js";
import { DI_SYMBOLS } from "../types.js";

const initializeModule = (bind: interfaces.Bind) => {
  bind<IMailerService>(DI_SYMBOLS.IMailerService).to(MailerService);
};

export const MailerModule = new ContainerModule(initializeModule);
