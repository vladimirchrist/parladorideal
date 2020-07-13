import IUserResponseDto from "../DTO/IUserResponseDto";
import ILoginRequest from "../DTO/ILoginRequest";

export default interface ISigninService {
    signin(loginRequest: ILoginRequest): Promise<IUserResponseDto>;
}