import React, { useReducer } from "react";

import AdminContext from "./adminContext";
import axios from "axios";
import AdminReducer from "./adminReducer";

import {
  GET_MED,
  CLEAR_CURRENT,
  CLEAR_MEDICINE,
  MED_ADD,
  MED_DELETE,
  MED_UPDATE,
  SET_CURRENT,
  FILTER_MEDICINE,
  CLEAR_FILTER,
} from "../../types";

const AdminState = (props) => {
  const initialState = {
    medicines: [],
    filtered: null,
    current: null,
  };

  const [state, dispatch] = useReducer(AdminReducer, initialState);

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

  const addMedicine = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(formData);

    try {
      const res = await axios.post(
        "http://localhost:8080/addMedicine",
        formData,
        config
      );
      console.log(res.data);

      dispatch({
        type: MED_ADD,
        payload: res,
      });
    } catch (err) {
      console.log("error");
    }
  };

  const updateMedicine = async (medicine) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(medicine);

    try {
      const res = await axios.post(
        `http://localhost:8080/updateMedicine/${medicine.id}`,
        medicine,
        config
      );
      console.log(res);

      dispatch({
        type: MED_UPDATE,
        payload: res,
      });
    } catch (err) {
      console.log("error");
    }
  };

  const deleteMedicine = async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(id);

    try {
      const res = await axios.delete(
        `http://localhost:8080/deleteMedicine/${id}`,
        config
      );
      console.log(res.data);

      dispatch({
        type: MED_DELETE,
        payload: res,
      });
    } catch (err) {
      console.log("error");
    }
  };

  const filterMedicines = async (text) => {
    dispatch({ type: FILTER_MEDICINE, payload: text });
  };

  const setCurrent = (medicine) => {
    dispatch({ type: SET_CURRENT, payload: medicine });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  const clearMedicine = () => {
    dispatch({ type: CLEAR_MEDICINE });
  };

  return (
    <AdminContext.Provider
      value={{
        medicines: state.medicines,
        filtered: state.filtered,
        current: state.current,
        addMedicine,
        deleteMedicine,
        setCurrent,
        clearCurrent,
        filterMedicines,
        updateMedicine,
        getMedicine,
        clearFilter,
        clearMedicine,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminState;
