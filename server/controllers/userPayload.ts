const Joi = require('joi');

export const userpayload = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
});

export const loginpayload = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
});

export const cartpayload = Joi.object().keys({
    quantity: Joi.number().required(),
    price: Joi.number().required(),
    productId: Joi.string().required(),
});


// export default {userpayload, loginpayload}