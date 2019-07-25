import { AsyncStorage } from "react-native";

const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

export default (transaksi = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TRANS_PENDING":
      return {
        isLoading: true
      };
    case "GET_TRANS_REJECTED":
      return {
        isLoading: false,
        isError: true
      };
    case "GET_TRANS_FULFILLED":
      return {
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      };
      default:
        return state;
  }

})