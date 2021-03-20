import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { addToCartReducer } from "./modules/cart/reducer";
import { laundriesReducer } from "./modules/laundries/reducer";
import { userReducer } from "./modules/currentUser/reducer";

const reducers = combineReducers({
  cart: addToCartReducer,
  laundries: laundriesReducer,
  user: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
