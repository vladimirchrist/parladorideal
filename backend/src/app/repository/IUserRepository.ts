import IUserDto from "../DTO/IUserDto";
import User from "../models/User";

export default interface IUserRepository {

    create(user: IUserDto): Promise<User>;
    findById(id: string): Promise<User | undefined>;
    findByEmail(email: string): Promise<User | undefined>;
    
}