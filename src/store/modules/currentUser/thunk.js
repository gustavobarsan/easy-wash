import axios from "axios";
import jwt_decode from "jwt-decode";
import { tokenValidator } from "../../../helpers/tokenValidator";
import { getUser } from "./actions";

export const getUserThunk = () => async (dispatch, _) => {
  if (!tokenValidator()) {
    return;
  }
  try {
    const res = await axios.get("https://easy-wash-server.herokuapp.com/users");
    const users = await res.data;
    const token = localStorage.getItem("authToken");
    const decoded = await jwt_decode(token);
    const userId = await decoded.sub;
    const loggedUser = await users.filter((user) => {
      return user.id === parseInt(userId);
    })[0];
    dispatch(getUser(loggedUser));
  } catch (err) {
    console.log(err);
  }
};
