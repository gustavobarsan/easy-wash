import { GET_USER } from "./actionType";

export const getUser = (user) => ({
  type: GET_USER,
  user,
});
