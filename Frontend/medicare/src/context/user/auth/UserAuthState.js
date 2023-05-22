import React, { useReducer } from "react";

import AuthContext from "./userAuthContext";
import axios from "axios";
import authReducer from "./userAuthReducer";

import { USER_LOGIN, USER_SIGNUP, USER_LOGOUT, AUTH_ERROR } from "../../types";

const UserAuthState = (props) => {
  const initialState = {
    user: {},
    login: false,
    signup: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const userLogin = async (loginUser) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(loginUser.email);

    try {
      const res = await axios.post(
        `http://localhost:8080/login?email=${loginUser.loginUser.email}&password=${loginUser.loginUser.password}`,

        config
      );
      console.log(res.data);
      if (res.data)
        dispatch({
          type: USER_LOGIN,
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

  const userSignup = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(formData.loginUser);

    try {
      const res = await axios.post(
        "http://localhost:8080/signup",
        formData.loginUser,
        config
      );
      console.log(res.data);
      if (res.data)
        dispatch({
          type: USER_SIGNUP,
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
  const logout = () => dispatch({ type: USER_LOGOUT });

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        login: state.login,
        signup: state.signup,
        userLogin,
        userSignup,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default UserAuthState;
