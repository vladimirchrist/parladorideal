import { Response, Request } from "express";
import { container } from "tsyringe";
import SigninService from "../service/SigninService";

class AuthController {
    
    public async authenticate(request: Request, reponse: Response): Promise<Response> {
        
        const { email, password } = request.body;

        const signinService = container.resolve(SigninService);
        const user = await signinService.signin({ email, password })
            .catch(err => err)

        return reponse.json(user);
    }
}

export default new AuthController();

