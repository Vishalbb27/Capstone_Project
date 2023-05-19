import React, { useReducer } from "react";

import AuthContext from "./authContext";
import axios from "axios";
import authReducer from "./authReducer";

import { ADMIN_LOGIN, SET_PASSWORD, AUTH_ERROR } from "../../types";

const AuthState = (props) => {
  const initialState = {
    admin: {},
    adminLogin: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const userLogin = async (loginUser) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(loginUser);

    try {
      const res = await axios.post(
        "http://localhost:8080/adminLogin",
        loginUser,
        config
      );
      console.log(res.data);
      if (res.data)
        dispatch({
          type: ADMIN_LOGIN,
          payload: res.data,
        });
      else {
        dispatch({
          type: AUTH_ERROR,
        });
      }
    } catch (err) {
      console.log("error");
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        admin: state.admin,
        adminLogin: state.adminLogin,
        userLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
