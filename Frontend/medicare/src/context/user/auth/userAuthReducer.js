import { USER_LOGIN, USER_SIGNUP, AUTH_ERROR, USER_LOGOUT } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case USER_LOGIN:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        login: true,
      };

    case AUTH_ERROR:
      return {
        ...state,
        login: false,
      };

    case USER_SIGNUP:
      return {
        ...state,
        signup: true,
        user: {},
      };

    case USER_LOGOUT:
      localStorage.removeItem("user");
      localStorage.removeItem("payment");
      localStorage.removeItem("shipping")
      return {
        ...state,
        user: {},
        login: false,
        cartItems: {},
      };
  }
};
