import IPostRepository from "./IPostRepository";
import IPostDto from "../DTO/IPostDto";
import { injectable } from "tsyringe";
import Post from "../models/Post";
import { getRepository } from "typeorm";
import AppError from "../../AppError";

@injectable()
export default class PostRepository implements IPostRepository {

    private _repository = getRepository(Post);

    public async save(postDto: IPostDto): Promise<Post> {
        const post = this._repository.create(postDto);
        await this._repository.save(post);
        return post;
    }

    public async findById(id: string): Promise<Post> {
        const post = await this._repository.findOne(id);

        if(!post) { throw new AppError("Post nao encontrado!") }

        return post;
    }
    
    public async findAllByUserId(userId: string): Promise<Post[]> {
        const posts = await this._repository.find({
            where: { userId }
        });

        if(!posts) { 
            throw new AppError("Nao foram encontrados posts para o usuário!")
        }

        return posts;
    }

    public async update(post: Post): Promise<Post> {
        const postUpdated = this._repository.update(post.id, post);

        console.log(postUpdated)
        return post;
    }

    public async delete(id: string): Promise<boolean> {
        const result = await this._repository.delete(id);
        if(result.affected) {return true}
        return false;
        
    }

    
}