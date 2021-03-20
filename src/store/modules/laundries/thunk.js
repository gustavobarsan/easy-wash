import axios from "axios";

import { getAll } from "./actions";

export const getAllThunk = () => async (dispatch, _) => {
  const res = await axios.get("https://easy-wash-server.herokuapp.com/users");
  const users = await res.data;
  const laundries = users.filter((user) => {
    return user.type === "PJ";
  });
  dispatch(getAll(laundries));
};
