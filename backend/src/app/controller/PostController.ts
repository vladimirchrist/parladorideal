import { Request, Response } from "express";
import IPostDto from "../DTO/IPostDto";
import { container } from "tsyringe";
import PostService from "../service/PostService";
import { IPostPatchDto } from "../DTO/IPostPatchDto";

export class PostController {

    public async create(request: Request, response: Response): Promise<Response> {
        
        const postDto: IPostDto = request.body;
        const _postService = container.resolve(PostService);

        const post = await _postService.create(postDto)
            .catch(err => err);
        
        return response.json(post)
    }

    public async getPost(request: Request, response: Response): Promise<Response> {
        
        const postId = request.params.id;
        const _postService = container.resolve(PostService);

        const post = await _postService.findById(postId)
            .catch(err => err);

        return response.json(post)
    }

    public async getUserPosts(request: Request, response: Response): Promise<Response> {
        const userId = request.params.id;
        const _postService = container.resolve(PostService);

        const post = await _postService.findAllByUserId(userId)
            .catch(err => err);

        return response.json(post)
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const id = request.params.id;
        const _postService = container.resolve(PostService);

        const post = await _postService.delete(id)
            .catch(err => err);

        return response.json(post)
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const postDataToUpdate: IPostPatchDto = request.body;
        const _postService = container.resolve(PostService);

        const post = await _postService.update(postDataToUpdate)
            .catch(err => err);

        return response.json(post)
    }

}

export default new PostController();
