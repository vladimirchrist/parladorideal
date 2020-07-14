import IPostService from "./IPostService";
import IPostDto from "../DTO/IPostDto";
import { injectable, inject } from "tsyringe";
import Post from "../models/Post";
import PostRepository from "../repository/PostRepository";
import { IPostPatchDto } from "../DTO/IPostPatchDto";

@injectable()
export default class PostService implements IPostService {
    
    constructor(
        @inject('PostRepository')
        private _postRepository: PostRepository
    ) { }

    public async create(postDto: IPostDto): Promise<Post> {
        const post = await this._postRepository.save(postDto);
        return post;
    }

    public async findById(id: string): Promise<Post> {
        const post = await this._postRepository.findById(id);
        return post;
    }
    
    public async findAllByUserId(userId: string): Promise<Post[]> {
        const posts = await this._postRepository.findAllByUserId(userId);
        return posts;
    }

    public async update(postDataToUpdate: IPostPatchDto): Promise<Post> {
        const post = await this._postRepository.findById(postDataToUpdate.id);

        post.message = postDataToUpdate.message;
        post.updatedAt = new Date();

        const postUpdated = await this._postRepository.update(post);
        return postUpdated;
    }

    public async delete(id: string): Promise<boolean> {
        return await this._postRepository.delete(id);
    }
}