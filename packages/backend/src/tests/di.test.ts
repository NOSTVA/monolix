import "reflect-metadata";

import {
  destroyContainer,
  getInjection,
  initializeContainer,
} from "../di/container.js";
import { UsersRepository } from "../core/infrastructure/repositories/users.repository.js";
import { AuthenticationService } from "../core/infrastructure/services/authentication.service.js";
import { afterEach, beforeEach, expect, it } from "vitest";
import { MailerService } from "../core/infrastructure/services/mailer.service.js";
import { EmailVerificationCodeRepository } from "../core/infrastructure/repositories/email-verification-codes.js";

beforeEach(() => {
  initializeContainer();
});

afterEach(() => {
  destroyContainer();
});

it("testing repos and services", async () => {
  const authService = getInjection("IAuthenticationService");
  expect(authService).toBeInstanceOf(AuthenticationService);

  const mailerService = getInjection("IMailerService");
  expect(mailerService).toBeInstanceOf(MailerService);

  const usersRepository = getInjection("IUsersRepository");
  expect(usersRepository).toBeInstanceOf(UsersRepository);

  const emailVerificationCodeRepository = getInjection(
    "IEmailVerificationCodeRepository",
  );
  expect(emailVerificationCodeRepository).toBeInstanceOf(
    EmailVerificationCodeRepository,
  );
});
