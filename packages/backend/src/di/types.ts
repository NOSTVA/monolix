import { IEmailVerificationCodeRepository } from "../core/application/repositories/email-verification-codes.interface.js";
import type { IOAuthRepository } from "../core/application/repositories/oauth.repository.interface.js";
import type { ITransaction } from "../core/application/repositories/transaction.interface.js";
import { type IUsersRepository } from "../core/application/repositories/users.repository.interface.js";
import { type IAuthenticationService } from "../core/application/services/authentication.service.interface.js";
import { IMailerService } from "../core/application/services/mailer.service.interface.js";

export const DI_SYMBOLS = {
  // Services
  IAuthenticationService: Symbol.for("IAuthenticationService"),
  IMailerService: Symbol.for("IMailerService"),

  // Repositories
  IUsersRepository: Symbol.for("IUsersRepository"),
  IOAuthRepository: Symbol.for("IOAuthRepository"),
  IEmailVerificationCodeRepository: Symbol.for(
    "IEmailVerificationCodeRepository",
  ),

  ITransaction: Symbol.for("ITransaction"),
};

export interface DI_RETURN_TYPES {
  // Services
  IAuthenticationService: IAuthenticationService;
  IMailerService: IMailerService;

  // Repositories
  IUsersRepository: IUsersRepository;
  IOAuthRepository: IOAuthRepository;
  IEmailVerificationCodeRepository: IEmailVerificationCodeRepository;

  ITransaction: ITransaction;
}
