import { injectable } from "tsyringe";

import IUserRepository from "./IUserRepository";
import IUserDto from "../DTO/IUserDto";
import User from "../models/User";
import { getRepository, Repository } from "typeorm";


@injectable()
export default class UserRepository implements IUserRepository {
    
    private _repository = getRepository(User)

    public async create(userDto: IUserDto): Promise<User> {
        const user = this._repository.create(userDto);
        await this._repository.save(user);
        return user;
    }

    public async findById(id: string): Promise<User | undefined> {
        const user = await this._repository.findOne(id);
        return user;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this._repository.findOne({ where: { email } });
        return user;
    }
      
}