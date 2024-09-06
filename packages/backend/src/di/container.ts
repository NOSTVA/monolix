import { Container } from "inversify";

import { AuthenticationModule } from "./modules/authentication.module.js";
import { UsersModule } from "./modules/users.module.js";
import { TransactionModule } from "./modules/transaction.module.js";
import { OAuthModule } from "./modules/oauth.module.js";
import { MailerModule } from "./modules/mailer.module.js";
import { type DI_RETURN_TYPES, DI_SYMBOLS } from "./types.js";
import { EmailVerificationCodeModule } from "./modules/email-verification-code.module.js";

var CONTAINER_INIT = false;
const ApplicationContainer = new Container({
  defaultScope: "Singleton",
});

export const initializeContainer = () => {
  if (!CONTAINER_INIT) {
    ApplicationContainer.load(UsersModule);
    ApplicationContainer.load(AuthenticationModule);
    ApplicationContainer.load(OAuthModule);
    ApplicationContainer.load(TransactionModule);
    ApplicationContainer.load(MailerModule);
    ApplicationContainer.load(EmailVerificationCodeModule);
    CONTAINER_INIT = true;
  }
};

export const destroyContainer = () => {
  if (CONTAINER_INIT) {
    ApplicationContainer.unload(UsersModule);
    ApplicationContainer.unload(AuthenticationModule);
    ApplicationContainer.unload(OAuthModule);
    ApplicationContainer.unload(TransactionModule);
    ApplicationContainer.unload(MailerModule);
    ApplicationContainer.unload(EmailVerificationCodeModule);
    CONTAINER_INIT = false;
  }
};

initializeContainer();

export function getInjection<K extends keyof typeof DI_SYMBOLS>(
  symbol: K,
): DI_RETURN_TYPES[K] {
  return ApplicationContainer.get(DI_SYMBOLS[symbol]);
}

export { ApplicationContainer };
