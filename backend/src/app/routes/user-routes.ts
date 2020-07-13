import { Router } from 'express';
import UsersController from '../controller/UsersController';

export default (router: Router): void => {
    router.post('/signup', UsersController.create)
}