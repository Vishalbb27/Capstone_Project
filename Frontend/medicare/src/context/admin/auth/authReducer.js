import { ADMIN_LOGIN, SET_PASSWORD, AUTH_ERROR } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      localStorage.setItem("admin", JSON.stringify(action.payload));
      console.log(action.payload.data);
      return {
        ...state,
        admin: action.payload,
        isAuthenticated: true,
        adminLogin: true,
      };

    case AUTH_ERROR:
      return {
        ...state,
        adminLogin: false,
      };
  }
};
