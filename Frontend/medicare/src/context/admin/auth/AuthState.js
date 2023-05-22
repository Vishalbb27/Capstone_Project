import React, { useReducer } from "react";

import AuthContext from "./authContext";
import axios from "axios";
import authReducer from "./authReducer";
import setAuthToken from "../../../components/utils/setAuthToken";

import { ADMIN_LOGIN, SET_PASSWORD, AUTH_ERROR } from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("admin"),
    admin: {},
    adminLogin: false,
    isAuthenticated: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const userLogin = async (loginUser) => {
    if (localStorage.token != null) {
      setAuthToken(localStorage.token);
    }
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
        isAuthenticated: state.isAuthenticated,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
