import { ADD_TO_CART, ADD_LIST_TO_CART, REMOVE_FROM_CART } from "./actionType";

export const addToCart = (cart) => ({
  type: ADD_TO_CART,
  cart,
});
export const removeFromCart = (cart) => ({
  type: REMOVE_FROM_CART,
  cart,
});
export const addListToCart = (list) => ({
  type: ADD_LIST_TO_CART,
  list,
});
