import { Request, Response } from 'express';
import UserService from '../service/user.service';
import { userpayload, loginpayload, cartpayload } from '../controllers/userPayload';
import * as Joi from 'joi';
import * as httpStatus from 'http-status'

import e = require('express');

export class UserController {
  private user_service: UserService = new UserService();

  // method to register user
  public async create_user(req: Request, res: Response) {
    const {
      error,
      value: payload
    } = Joi.validate(req.body, userpayload, {
      abortEarly: false
    });

    if (error) {
      return res
        .status(400)
        .send({
          info: 'Insufficient parameters',
          error: error.message
        });
    }
    try {
      let getUser = await this.user_service.getUserByEamil(payload.email);
      if (getUser) {
        return res
          .status(httpStatus.UNAUTHORIZED)
          .send({ info: 'User Alredy created with that email' });
      } else {
        let createUser = await this.user_service.createUser(payload);
        return res
          .status(httpStatus.OK)
          .send({ info: 'User Successfully Registered', data: createUser })
      }

    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(error.message);
    }

  }

  // method to let user login
  public async login(req: Request, res: Response) {
    const {
      error,
      value: payload
    } = Joi.validate(req.body, loginpayload, {
      abortEarly: false
    });

    if (error) {
      return res
        .status(400)
        .send({
          info: 'Insufficient parameters',
          error: error.message
        });
    }
    try {
      let getUser = await this.user_service.getUserByEamil(payload.email);
      if (!getUser) {
        return res
          .status(httpStatus.UNAUTHORIZED)
          .send({ info: 'No user Found With Email' });

      }
      else {
        let userLogin = await this.user_service.login(payload, getUser);
        if (!userLogin) {
          return res
            .status(httpStatus.UNAUTHORIZED)
            .send({ info: 'Password Not Matched' })
        } else {
          return res
            .status(httpStatus.OK)
            .send({ info: 'Login', data: userLogin })
        }
      }
    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(error.message);
    }
  }

  // get All product
  public async getAllProduct(req: Request, res: Response) {
    try {
      let product = await this.user_service.getAllProduct();
      return res
        .status(httpStatus.OK)
        .send({ info: 'Product List', data: product })
    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(error.message);
    }
  }

  // add product to cart
  public async addToCart(req: Request, res: Response) {
    const {
      error,
      value: payload
    } = Joi.validate(req.body, cartpayload, {
      abortEarly: false
    });

    if (error) {
      return res
        .status(400)
        .send({
          info: 'Insufficient parameters',
          error: error.message
        });
    }
    try {
      await this.user_service.getproduct(payload.productid);
      let checkItemInCart = await this.user_service.checkItemIncart(req['decoded'].id, payload);
      return res
        .status(httpStatus.OK)
        .send({ info: 'Cart List', data: checkItemInCart })
    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(error.message);
    }
  }

  // get cart of user
  public async getUserCart(req: Request, res: Response) {
    try {
      let cartProduct = await this.user_service.getUserCart(req['decoded'].id);
      return res
        .status(httpStatus.OK)
        .send({ info: 'Cart Product', data: cartProduct })
    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(error.message);
    }
  }
}