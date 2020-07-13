import { injectable, inject } from "tsyringe";

import IUserProfileService from "./IUserProfileService";
import IUserResponseDto from "../DTO/IUserResponseDto";
import IUserRepository from "../repository/IUserRepository";
import AppError from "../../AppError";

@injectable()
export default class UserProfileService implements IUserProfileService {

    constructor(
        @inject('UserRepository')
        private _userRepository: IUserRepository
    ) { }

    public async getById(userId: string): Promise<IUserResponseDto> {
        const user = await this._userRepository.findById(userId);

        if(!user) { throw new AppError('Usuário nao encontrado'); }
        
        const { id, name, email } = user;
        return { id, name, email };
    }
    
}