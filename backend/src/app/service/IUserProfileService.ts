import IUserResponseDto from "../DTO/IUserResponseDto";

export default interface IUserProfileService{
    getById(id: string):Promise<IUserResponseDto>;
}