import { EmailVerificationCode } from "../../entities/models/email-verification-code.js";
import { TransactionScope } from "./transaction.interface.js";

export interface IEmailVerificationCodeRepository {
  createVerificationCode(input: EmailVerificationCode, tx?: TransactionScope): Promise<EmailVerificationCode>;
  deleteVerificationCode(code: string, tx?: TransactionScope): Promise<EmailVerificationCode | undefined>;
  deleteVerificationCodeByUserId(userId: string, tx?: TransactionScope): Promise<EmailVerificationCode | undefined>;
  getVerificationCodeByUserId(userId: string, tx?: TransactionScope): Promise<EmailVerificationCode | undefined>;
}
