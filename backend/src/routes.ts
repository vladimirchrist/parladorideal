import {Router} from 'express';
import UsersController from './app/controller/UsersController';
import AuthController from './app/controller/AuthController';
import PostController from './app/controller/PostController';
import PostsController  from './app/controller/PostsController';


const routes = Router();

routes.post('/users', UsersController.create)
routes.get('/users/:id', UsersController.get)

routes.post('/auth', AuthController.authenticate)

routes.post('/post', PostController.create)
routes.get('/post/:id', PostController.getPost)
routes.delete('/post/:id', PostController.delete)
routes.patch('/post', PostController.update)

routes.get('/posts', PostsController.get)
routes.get('/posts/byUser/:id', PostsController.getUserPosts)




export default routes;
