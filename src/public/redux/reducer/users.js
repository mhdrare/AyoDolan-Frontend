const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

export default (users = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_PENDING":
      return {
        isLoading: true
      };
    case "GET_USER_REJECTED":
      return {
        isLoading: false,
        isError: true
      };
    case "GET_USER_FULFILLED":
      console.log("action.payload.data.data");
      console.log(action.payload.data.data['0']);
      
      return {
        isLoading: false,
        isError: false,
        data: action.payload.data.data['0']
      };
    default:
      return state;
  }
});
