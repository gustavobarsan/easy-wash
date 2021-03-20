import { GET_USER } from "./actionType";

const user = {
  email: "",
  password: "",
  name: "",
  type: "",
  phone: "",
  id: "",
  address: {
    zipcode: "",
    street: "",
    number: "",
    district: "",
    city: "",
    UF: "",
  },
  schedule: {
    initial: "",
    end: "",
  },
  services: [{}],
};

export const userReducer = (state = user, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...action.user };
    default:
      return state;
  }
};
