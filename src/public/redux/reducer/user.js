const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

export default (reducer = (state = initialState, action) => {
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
      console.log("ini payload  "+action.payload.data);
      
      return {
        isLoading: false,
        isError: false,
        data: []
      };

    default:
      return state;
  }
});
