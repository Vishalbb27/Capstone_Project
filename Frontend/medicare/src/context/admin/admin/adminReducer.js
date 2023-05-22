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

export default (state, action) => {
  switch (action.type) {
    case GET_MED:
      return {
        ...state,
        medicines: action.payload,
      };

    case MED_ADD:
      return {
        ...state,
        medicines: action.payload,
      };

    case MED_DELETE:
      return {
        ...state,
        medicines: action.payload,
      };

    case MED_UPDATE:
      return {
        ...state,
        medicines: action.payload,
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case FILTER_MEDICINE:
      return {
        ...state,
        filtered: state.medicines.data.filter((medicine) => {
          console.log(medicine);
          const regex = new RegExp(`${action.payload}`, "gi"); // gi = global and case insensitive
          return medicine.name.match(regex) || medicine.price.match(regex);
        }),
      };

    case CLEAR_MEDICINE:
      return {
        ...state,
        medicines: null,
        filtered: null,
        current: null,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
