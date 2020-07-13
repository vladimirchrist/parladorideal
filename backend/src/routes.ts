import {Router} from 'express';
import UsersController from './app/controller/UsersController';
import AuthController from './app/controller/AuthController';

const routes = Router();

routes.post('/users', UsersController.create)
routes.get('/users/:id', UsersController.get)

routes.post('/auth', AuthController.authenticate)

export default routes;
