import { Application, Request, Response } from 'express';
import {authValidator} from '../config/tokenValidator';
import {UserController} from '../controllers/user.controller';

export class UserRoutes {

    private user_controller: UserController = new UserController();

    public route(app: Application) {
        
        // to register user
        app.post('/api/user', (req: Request, res: Response) => {
            this.user_controller.create_user(req, res);
        });

        // to let user login
        app.post('/api/login', (req: Request, res: Response) => {
            this.user_controller.login(req, res);
        });

        // fetch all product
        app.get('/api/product', (req: Request, res: Response) => {
            this.user_controller.getAllProduct(req, res);
        });

        // add product to cart
        app.post('/api/add/cart', authValidator, (req: Request, res: Response) => {
            this.user_controller.addToCart(req, res);
        });

        // get all cart product of user
        app.get('/api/user/cart', authValidator, (req: Request, res: Response) => {
            this.user_controller.getUserCart(req, res);
        });

    }
}