import { container } from "tsyringe";

import IUserRepository from "./app/repository/IUserRepository";
import UserRepository from "./app/repository/UserRepository";

import ISignupService from "./app/service/ISignupService";
import SignupService from "./app/service/SignupService";


container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ISignupService>('SignupService', SignupService);