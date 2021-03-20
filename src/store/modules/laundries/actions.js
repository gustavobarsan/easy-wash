import { GET_ALL } from "./actionType";

export const getAll = (laundries) => ({
  type: GET_ALL,
  laundries,
});
