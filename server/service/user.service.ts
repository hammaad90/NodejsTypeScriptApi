import { IUser } from "models/models/user.model";
import { createUser, getUser, getProduct, getCart, createCart, updateCart, getUserCart } from '../query/user.query';
import * as  bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash';

export default class UserService {

    // method to register user
    public async createUser(payload: IUser) {
        var encryptedPassword = bcrypt.hashSync(payload.password, 8);
        let user = {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            password: encryptedPassword
        }
        let createUSer = await createUser(user);
        let result = _.pick(createUSer, ['_id', 'firstName', 'lastName', 'email', 'isActive'])
        return result;

    }

    // method to fetch user detail by email
    public async getUserByEamil(email: IUser) {
        let query = {
            email: email
        }
        let user = await getUser(query)
        return user;

    }

    // method to let user login
    public async login(payload: IUser, user: IUser) {
        let passwordIsValid = bcrypt.compareSync(payload.password, user.password);
        if (!passwordIsValid) {
            return false;
        } else {
            let LoginUser = _.pick(user, ['_id', 'firstName', 'lastName', 'email']);
            let token = jwt.sign({ id: user._id }, process.env.SECRETKEY, { expiresIn: "1 days" });
            return {
                user: LoginUser,
                token: token
            }
        }

    }

    // to fetch llist of all product
    public async getAllProduct() {
        let product = await getProduct({})
        return product;

    }

    // to fetch particular product with id
    public async getproduct(productId) {
        let query = {
            _id: productId
        }
        let product = await getProduct(query)
        return product;

    }

    // check item in user cart update and create cart and if same product added increase quantity of product
    public async checkItemIncart(userid, payload) {
        let query = {
            _user: userid
        }
        let cart = await getCart(query);
        if (cart) {
            let products = cart.products;
            // update cart
            let cartProduct = products.find((item) => item._product == payload.productId)
            !cartProduct ? products.push(this.updateCartItem(payload)) : _.set(cartProduct, "quantity", cartProduct.quantity + payload.quantity);
            let updatedData = {
                _user: userid,
                products: products,
            };
            return await updateCart({ _id: cart._id }, updatedData);
        } else {
            // create cart
            let cartItem = {
                _user: userid,
                products: [
                    {
                        _product: payload.productId,
                        quantity: payload.quantity,
                        price: payload.price
                    }
                ]
            };
            return await createCart(cartItem);
        }

    }

    // to get user cart
    public async getUserCart(userid) {
        let query = {
            _user: userid
        }
        let product = await getUserCart(query)
        return product;

    }

    // to update the cart of user if another product added
    public updateCartItem(payload) {
        const cartProduct = {
            _product: payload.productId,
            quantity: payload.quantity,
            price: payload.price
        };
        //  products.push(cartProduct);
        return cartProduct;
    }



}