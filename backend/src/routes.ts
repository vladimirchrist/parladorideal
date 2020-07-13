import {Router} from 'express';
import UsersController from './app/controller/UsersController';

const routes = Router();

routes.post('/users', UsersController.create)

export default routes;
