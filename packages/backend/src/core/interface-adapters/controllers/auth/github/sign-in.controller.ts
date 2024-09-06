import { z } from "zod";
import { type Cookie } from "../../../../entities/models/cookie.js";
import { InputParseError } from "../../../../entities/errors/common.js";
import {
  signInCallbackUseCase,
  signInUseCase,
} from "../../../../application/use-cases/auth/github/sign-in.use-case.js";

const inputSchema = z.object({
  code: z.string(),
  state: z.string(),
});

export async function signInGitHubController(): Promise<{ url: string }> {
  const { url } = await signInUseCase();
  return { url: url.toString() };
}

export async function signInGitHubCallbackController(
  input: Partial<z.infer<typeof inputSchema>>,
): Promise<{ cookie: Cookie }> {
  const { data, error: inputParseError } = inputSchema.safeParse(input);

  if (inputParseError) {
    throw new InputParseError("Invalid data", { cause: inputParseError });
  }

  return await signInCallbackUseCase(data);
}
