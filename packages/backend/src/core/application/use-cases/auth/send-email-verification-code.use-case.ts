import { alphabet, generateRandomString } from "oslo/crypto";
import { getInjection } from "../../../../di/container.js";
import { createDate, TimeSpan } from "oslo";
import env from "../../../env.js";

export async function sendEmailVerificationCode(input: { userId: string; email: string }) {
  const { userId, email } = input;
  const mailerService = getInjection("IMailerService");

  const code = await generateEmailVerificationCode({
    userId,
    email,
  });

  return mailerService.sendMail({
    from: env.MAIL_USERNAME,
    to: email,
    subject: "Email Verification Code",
    html: `Your verification code is: <b>${code}</b>`,
  });
}

async function generateEmailVerificationCode(input: { userId: string; email: string }) {
  const { userId, email } = input;
  const emailVerificationCodeRepository = getInjection("IEmailVerificationCodeRepository");

  await emailVerificationCodeRepository.deleteVerificationCodeByUserId(userId);

  const code = generateRandomString(8, alphabet("0-9"));
  const expiresAt = createDate(new TimeSpan(15, "m"));

  return await emailVerificationCodeRepository.createVerificationCode({ code, email, userId, expiresAt });
}
