import  { injectable, inject } from 'tsyringe';
import { hash } from 'bcryptjs';

import ISignupService from "./ISignupService";
import IUserRepository from '../repository/IUserRepository';

import IUserDto from '../DTO/IUserDto';
import IUserResponseDto from '../DTO/IUserResponseDto';
import AppError from '../../AppError';


@injectable()
export default class SignupService implements ISignupService {

    constructor(
        @inject('UserRepository')
        private _userRepository: IUserRepository
    ) { }

    public async signup(userDto: IUserDto): Promise<IUserResponseDto> {
        
        const userExists = await this._userRepository.findByEmail(userDto.email);

        if(userExists) { throw new AppError("Email já cadastrado!") }

        userDto.password = await hash(userDto.password, 8);

        const user = await this._userRepository.create(userDto);

        const response: IUserResponseDto = { ...user };
        return response;
    }

}
