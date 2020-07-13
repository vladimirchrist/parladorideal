import { inject, injectable } from "tsyringe";
import IUserRepository from "../repository/IUserRepository";
import ISigninService from "./ISigninService";
import ILoginRequest from "../DTO/ILoginRequest";
import IUserResponseDto from "../DTO/IUserResponseDto";
import AppError from "../../AppError";
import { compare } from "bcryptjs";

@injectable()
export default class SigninService implements ISigninService{
    constructor(
        @inject('UserRepository') 
        private _userRepository: IUserRepository
    ) { }

    public async signin(loginRequest: ILoginRequest): Promise<IUserResponseDto> {
        
        const user = await this._userRepository.findByEmail(loginRequest.email);
        
        if(!user) { throw new AppError('Email incorreto!')}

        const passwordsMatch = await compare(loginRequest.password, user.password);

        if(!passwordsMatch) { throw new AppError('Senha incorreta!')};

        const {id, name, email} = user;
        
        return {id, name, email}; 
        
    }

}