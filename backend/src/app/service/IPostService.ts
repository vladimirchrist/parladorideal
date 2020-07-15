import IPostDto from "../DTO/IPostDto";
import Post from "../models/Post";
import { IPostPatchDto } from "../DTO/IPostPatchDto";

export default interface IPostService {
    create(postDto: IPostDto): Promise<Post>;
    findById(id: string): Promise<Post>;
    findAll(): Promise<Post[]>;
    findAllByUserId(userId: string): Promise<Post[]>;
    update(postDataToUpdate: IPostPatchDto): Promise<Post>
    delete(id: string): Promise<boolean>;
}