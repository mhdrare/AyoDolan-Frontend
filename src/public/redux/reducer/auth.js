import { AsyncStorage } from "react-native";

const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

export default (reducer = async (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER_PENDING":
      return {
        isLoading: true
      };
    case "ADD_USER_REJECTED":
      return {
        isLoading: false,
        isError: true
      };
    case "ADD_USER_FULFILLED":
      return {
        isLoading: false,
        isError: false,
        data: []
      };

    case "LOGIN_USER_PENDING":
      return {
        isLoading: true
      };
    case "LOGIN_USER_REJECTED":
      return {
        isLoading: false,
        isError: true
      };
    case "LOGIN_USER_FULFILLED":
      await AsyncStorage.setItem("Token", action.payload.data.token);
      await AsyncStorage.setItem(
        "user_id",
        `${action.payload.data.data["0"].user_id}`
      );
      return {
        isLoading: false,
        isError: false,
        data: action.payload.data.data["0"],
        token: action.payload.data.token
      };

    default:
      return state;
  }
});
