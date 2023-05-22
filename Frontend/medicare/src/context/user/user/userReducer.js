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

export default (state, action) => {
  switch (action.type) {
    case GET_MED:
      return {
        ...state,
        medicines: action.payload,
      };
    case ADD_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case GET_CART:
      return {
        ...state,
        cartItems: action.payload,
      };

    case DELETE_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case GET_CARTS:
      return {
        ...state,
        cart: action.payload,
      };
    case GET_HOME:
      return {
        ...state,
        home: action.payload,
      };
    case GET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case FILTER_MEDICINE:
      return {
        ...state,
        sorting: false,
        filtered: state.medicines.data.filter((medicine) => {
          console.log(medicine);
          const regex = new RegExp(`${action.payload}`, "gi"); // gi = global and case insensitive
          return (
            medicine.name.match(regex) ||
            medicine.productDescription.match(regex)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
        sorting: false,
      };

    case SORT_MEDICINE:
      console.log(action.payload.sortedMedicines);
      return {
        ...state,
        medicines: action.payload.sortedMedicines,
        sortOption: action.payload.sortOption,
        sorting: true,
      };
  }
};
