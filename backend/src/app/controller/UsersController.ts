import { Request, Response } from 'express';
import { container } from 'tsyringe';

import IUserDto from '../DTO/IUserDto';
import SignupService from '../service/SignupService';


class UsersController {

    public async create(request: Request, response: Response): Promise<Response> {
        const userDto: IUserDto = request.body;

        const signupService = container.resolve(SignupService);
        
        const user = await signupService.signup(userDto);

        return response.json(user)
    }
}

export default new UsersController();
