import { ContainerModule, type interfaces } from "inversify";

import { IEmailVerificationCodeRepository } from "../../core/application/repositories/email-verification-codes.interface.js";
import { EmailVerificationCodeRepository } from "../../core/infrastructure/repositories/email-verification-codes.js";
import { DI_SYMBOLS } from "../types.js";

const initializeModule = (bind: interfaces.Bind) => {
  bind<IEmailVerificationCodeRepository>(DI_SYMBOLS.IEmailVerificationCodeRepository).to(
    EmailVerificationCodeRepository
  );
};

export const EmailVerificationCodeModule = new ContainerModule(initializeModule);
