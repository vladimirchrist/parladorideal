import { Response, Request } from "express";
import { container } from "tsyringe";
import SigninService from "../service/SigninService";

class AuthController {

    public async authenticate(request: Request, response: Response): Promise<Response> {

        const { email, password } = request.body;

        const signinService = container.resolve(SigninService);
        const res = await signinService.signin({ email, password })
            .catch(err => err);

        if (res instanceof Error) {
            return response.status(400).json({error: res.message});
        }

        return response.json(res);
    }
}

export default new AuthController();

