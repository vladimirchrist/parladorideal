import { Request, Response } from 'express';
import { container } from 'tsyringe';

import IUserDto from '../DTO/IUserDto';
import SignupService from '../service/SignupService';
import UserProfileService from '../service/UserProfileService';


class UsersController {

    public async get(request: Request, response: Response): Promise<Response> {
        const userId = request.params.id;

        const userProfileService = container.resolve(UserProfileService);

        const user = await userProfileService.getById(userId)
            .catch(err => err)

        return response.json(user)
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const userDto: IUserDto = request.body;

        const signupService = container.resolve(SignupService);
        
        const user = await signupService.signup(userDto);

        return response.json(user)
    }


}

export default new UsersController();
