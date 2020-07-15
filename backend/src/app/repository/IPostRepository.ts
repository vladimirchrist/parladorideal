import IPostDto from "../DTO/IPostDto";
import Post from "../models/Post";

export default interface IPostRepository {
    save(postDto: IPostDto): Promise<Post>;
    findById(id: string): Promise<Post>;
    findAllByUserId(userId: string): Promise<Post[]>;
    findAll(): Promise<Post[]>;
    update(post: Post): Promise<Post>;
    delete(id: string): Promise<boolean>;
}