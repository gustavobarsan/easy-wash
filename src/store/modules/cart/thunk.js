import { addToCart, addListToCart, removeFromCart } from "./actions";
import uuid from "react-uuid";
const cart = {
  products: [],
  total: 0,
};

export const addToCartThunk = (product) => (dispatch, _) => {
  product = { ...product, id: uuid() };
  cart.products = [...cart.products, product];
  cart.total = cart.total + parseFloat(product.price);
  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch(addToCart(cart));
};

export const addListToCartThunk = (list) => (dispatch, _) => {
  if (!list) return;
  if (JSON.stringify(list) === JSON.stringify(cart.products)) return;
  cart.products = [...list];
  const newCartTotal = cart.products.map((el) => {
    return parseFloat(el.price);
  });
  cart.total = newCartTotal.reduce((acc, cur) => acc + cur);
  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch(addListToCart(cart));
};

export const removeFromCartThunk = (id) => (dispatch, _) => {
  const newCartProducts = cart.products.filter((el) => {
    return el.id !== id;
  });

  if (newCartProducts.length === 0) {
    localStorage.removeItem("cart");
    cart.products = [];
    cart.total = 0;
    dispatch(removeFromCart(cart));
    return;
  }

  const newCartTotal = newCartProducts.map((el) => {
    return parseFloat(el.price);
  });
  cart.products = [...newCartProducts];
  cart.total = newCartTotal.reduce((acc, cur) => acc + cur);
  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch(removeFromCart(cart));
};

export const resetCartThunk = () => (dispatch, _) => {
  localStorage.removeItem("cart");
  cart.products = [];
  cart.total = 0;
  dispatch(addToCart(cart));
};
