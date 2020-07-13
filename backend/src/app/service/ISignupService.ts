import IUserDto from "../DTO/IUserDto";
import IUserResponseDto from "../DTO/IUserResponseDto";

export default interface ISignupService {
    signup(userDto: IUserDto): Promise<IUserResponseDto>;

}