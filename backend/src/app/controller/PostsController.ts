import { Request, Response } from "express";
import { container } from "tsyringe";
import PostService from "../service/PostService";

export class PostsController {

    public async get(request: Request, response: Response): Promise<Response> {
        const userId = request.params.id;
        const _postService = container.resolve(PostService);

        const post = await _postService.findAll()
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
}

export default new PostsController();
