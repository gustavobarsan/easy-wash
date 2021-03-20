import { ADD_TO_CART, REMOVE_FROM_CART, ADD_LIST_TO_CART } from "./actionType";

export const addToCartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...action.cart };
    case REMOVE_FROM_CART:
      return { ...action.cart };
    case ADD_LIST_TO_CART:
      return { ...action.list };
    default:
      return state;
  }
};
