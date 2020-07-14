import {Router} from 'express';
import UsersController from './app/controller/UsersController';
import AuthController from './app/controller/AuthController';
import PostController from './app/controller/PostController';


const routes = Router();

routes.post('/users', UsersController.create)
routes.get('/users/:id', UsersController.get)

routes.post('/auth', AuthController.authenticate)

routes.post('/post', PostController.create)
routes.get('/post/:id', PostController.getPost)
routes.get('/post/byUser/:id', PostController.getUserPosts)
routes.delete('/post/:id', PostController.delete)
routes.patch('/post', PostController.update)



export default routes;
