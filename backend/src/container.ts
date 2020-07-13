import { container } from "tsyringe";

import IUserRepository from "./app/repository/IUserRepository";
import UserRepository from "./app/repository/UserRepository";

import ISignupService from "./app/service/ISignupService";
import SignupService from "./app/service/SignupService";

import ISigninService from "./app/service/ISigninService";
import SigninService from "./app/service/SigninService";

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ISignupService>('SignupService', SignupService);
container.registerSingleton<ISigninService>('SigninService', SigninService);