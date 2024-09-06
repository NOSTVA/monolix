import { isWithinExpirationDate } from "oslo";
import { getInjection } from "../../../../di/container.js";
import { UnauthorizedError } from "../../../entities/errors/auth.js";

export async function verifyEmailVerificationCode(input: {
  userId: string;
  email: string;
  code: string;
}) {
  const transaction = getInjection("ITransaction");
  const emailVerificationCodeRepository = getInjection(
    "IEmailVerificationCodeRepository",
  );
  const userRepository = getInjection("IUsersRepository");

  transaction.create(async (tx) => {
    const verificationCode =
      await emailVerificationCodeRepository.getVerificationCodeByUserId(
        input.userId,
        tx,
      );

    if (!verificationCode || verificationCode.code !== input.code) {
      throw new UnauthorizedError("invalid verification code");
    }

    await emailVerificationCodeRepository.deleteVerificationCode(
      verificationCode.code,
      tx,
    );

    if (!isWithinExpirationDate(verificationCode.expiresAt)) {
      throw new UnauthorizedError("Verification code has expired");
    }

    if (verificationCode.email !== input.email) {
      throw new UnauthorizedError("You are not authorized");
    }

    userRepository.updateUserById(input.userId, { emailVerified: true }, tx);
  });
}
