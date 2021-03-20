import { GET_ALL } from "./actionType";

const laundries = [];

export const laundriesReducer = (state = laundries, action) => {
  switch (action.type) {
    case GET_ALL:
      return [...action.laundries];
    default:
      return state;
  }
};
