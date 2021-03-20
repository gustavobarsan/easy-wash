import jwt_decode from "jwt-decode";

export const tokenValidator = () => {
  const token = localStorage.getItem("authToken");
  try {
    jwt_decode(token);
    return true;
  } catch (err) {
    console.log(err);
    localStorage.setItem("authToken", "");
    return false;
  }
};
