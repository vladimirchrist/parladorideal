import { container } from "tsyringe";

import IUserRepository from "./app/repository/IUserRepository";
import UserRepository from "./app/repository/UserRepository";

import IPostRepository from "./app/repository/IPostRepository";
import PostRepository from "./app/repository/PostRepository";

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IPostRepository>('PostRepository', PostRepository);