import { ADMIN_LOGIN, SET_PASSWORD, AUTH_ERROR } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      return {
        ...state,
        admin: action.payload,
        adminLogin: true,
      };

    case AUTH_ERROR:
      return {
        ...state,
        adminLogin: false,
      };
  }
};
