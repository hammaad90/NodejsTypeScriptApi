import users from '../models/schema/user.schema';
import product from '../models/schema/product.schema';
import cart from '../models/schema/cart.schema';

export async function createUser(data) {
    let user = await users.create(data);
    return  user ? user: null;
}

export async function getUser(query) {
    let user = await users.findOne(query);
    return  user ? user: null;
}

export async function getProduct(query) {
    let products = await product.find(query);
    return  products ? products: null;
}

export async function getCart(query) {
    let cartproduct = await cart.findOne(query);
    return  cartproduct ? cartproduct: null;
}

export async function createCart(data) {
    let cartproduct = await cart.create(data);
    return  cartproduct ? cartproduct: null;
}

export async function updateCart(query, data) {
    let cartproduct = await cart.findByIdAndUpdate(query, data, { new: true });
    return  cartproduct ? cartproduct: null;
}

export async function getUserCart(query) {
  let cartproduct = await cart.findOne(query)
  .populate('products._product')
  return  cartproduct ? cartproduct: null;
}