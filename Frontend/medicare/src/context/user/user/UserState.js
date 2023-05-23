import React, { useReducer } from "react";

import UserContext from "./userContext";
import axios from "axios";
import authReducer from "./userReducer";
import {
  GET_MED,
  ADD_CART,
  GET_CART,
  DELETE_CART,
  GET_HOME,
  GET_PAYMENT,
  GET_CARTS,
  FILTER_MEDICINE,
  CLEAR_FILTER,
  SORT_MEDICINE,
} from "../../types";
const UserState = (props) => {
  const initialState = {
    cartItems: null,
    medicines: [],
    home: true,
    cart: false,
    payment: false,
    filtered: null,
    sortOption: "default",
    sorting: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const getCartItems = async (user) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(user);
    try {
      const res = await axios.get(
        `http://localhost:8080/getCart/?email=${user.email}`,

        config
      );
      console.log(res.data);

      dispatch({
        type: GET_CART,
        payload: res,
      });
    } catch (err) {
      console.log("error");
    }
  };

  const addCartItems = async (id, user) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(user);

    try {
      const res = await axios.post(
        `http://localhost:8080/addCart/${id}`,
        user,
        config
      );
      console.log(res.data);

      dispatch({
        type: ADD_CART,
        payload: res,
      });
    } catch (err) {
      console.log("error");
    }
  };

  const deleteCartItems = async (id, user) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(id);

    try {
      const res = await axios.delete(
        `http://localhost:8080/deleteCart/${id}?email=${user.email}`,
        config
      );
      console.log(res.data);

      dispatch({
        type: DELETE_CART,
        payload: res,
      });
    } catch (err) {
      console.log("error");
    }
  };

  const getMedicine = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        "http://localhost:8080/getMedicine",

        config
      );
      console.log(res.data);

      dispatch({
        type: GET_MED,
        payload: res,
      });
    } catch (err) {
      console.log("error");
    }
  };

  const setHome = (data) => {
    dispatch({
      type: GET_HOME,
      payload: data,
    });
  };

  const setPayment = (data) => {
    dispatch({
      type: GET_PAYMENT,
      payload: data,
    });
  };

  const setCart = (data) => {
    dispatch({
      type: GET_CARTS,
      payload: data,
    });
  };
  const filterMedicines = async (text) => {
    dispatch({ type: FILTER_MEDICINE, payload: text });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  const sortMedicines = (option, medicines) => {
    let sortedMedicines = medicines;
    console.log(sortedMedicines);
    if (option === "priceAsc") {
      sortedMedicines.data.sort((a, b) => a.price - b.price);
    } else if (option === "priceDesc") {
      sortedMedicines.data.sort((a, b) => b.price - a.price);
    } else if (option === "nameAsc") {
      sortedMedicines.data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "nameDesc") {
      sortedMedicines.data.sort((a, b) => b.name.localeCompare(a.name));
    } else if (option === "offers") {
      sortedMedicines.data.sort((a, b) => b.offers - a.offers);
    }

    dispatch({
      type: SORT_MEDICINE,
      payload: { sortedMedicines, sortOption: option },
    });
  };

  return (
    <UserContext.Provider
      value={{
        cartItems: state.cartItems,
        medicines: state.medicines,
        cart: state.cart,
        home: state.cart,
        payment: state.payment,
        getMedicine,
        getCartItems,
        addCartItems,
        deleteCartItems,
        setCart,
        setPayment,
        setHome,
        filterMedicines,
        filtered: state.filtered,
        clearFilter,
        sortMedicines,
        sorting: state.sorting,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
