import { hash } from "@node-rs/argon2";

import { getInjection } from "../../../../di/container.js";
import { AuthenticationError } from "../../../entities/errors/auth.js";
import { type Cookie } from "../../../entities/models/cookie.js";
import { type Session } from "../../../entities/models/session.js";
import { type User } from "../../../entities/models/user.js";

export async function signUpUseCase(input: {
  username: string;
  email: string;
  password: string;
}): Promise<{
  session: Session;
  cookie: Cookie;
  user: Pick<User, "id" | "username" | "email" | "emailVerified">;
}> {
  const usersRepository = getInjection("IUsersRepository");
  const user = await usersRepository.getUserByEmail(input.email);
  if (user) {
    throw new AuthenticationError("Username taken");
  }

  const passwordHash = await hash(input.password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });

  const authenticationService = getInjection("IAuthenticationService");
  const userId = authenticationService.generateUserId();

  const newUser = await usersRepository.createUser({
    id: userId,
    email: input.email,
    emailVerified: false,
    username: input.username,
    hashedPassword: passwordHash,
  });

  const { cookie, session } =
    await authenticationService.createSession(newUser);

  return {
    cookie,
    session,
    user: {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      emailVerified: newUser.emailVerified,
    },
  };
}
