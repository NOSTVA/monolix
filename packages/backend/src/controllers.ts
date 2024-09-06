import "reflect-metadata";

import { authenticateUserController } from "./core/interface-adapters/controllers/auth/authenticate.controller.js";
import { signInController } from "./core/interface-adapters/controllers/auth/sign-in.controller.js";
import { signOutController } from "./core/interface-adapters/controllers/auth/sign-out.controller.js";
import { signUpController } from "./core/interface-adapters/controllers/auth/sign-up.controller.js";
import { signInGitHubCallbackController } from "./core/interface-adapters/controllers/auth/github/sign-in.controller.js";
import { signInGitHubController } from "./core/interface-adapters/controllers/auth/github/sign-in.controller.js";

const auth = {
  authenticateUserController,
  signInController,
  signOutController,
  signUpController,
  signInGitHubController,
  signInGitHubCallbackController,
};

export { auth };
