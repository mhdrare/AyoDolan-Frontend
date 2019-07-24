const initialState = {
    data: [],
    isLoading: false,
    isError: false
  };

  export default (destinasi = (state = initialState, action) =>{
      switch(action.type){
        case 'GET_DESTINASI_PENDING':
            return{   
                isLoading: true
            };
        case 'GET_DESTINASI_REJECTED':
            return{
                isLoading: false,
                isError: true   
            }
        case 'GET_DESTINASI_FULFILLED':
            return{
                isLoading: false,
                isError: false,
                datadestinasi: action.payload.data.data
            }
        case 'GET_POPULAR_PENDING':
            return{   
                isLoading: true
            };
        case 'GET_POPULAR_REJECTED':
            return{
                isLoading: false,
                isError: true   
            }
        case 'GET_POPULAR_FULFILLED':
            return{
                isLoading: false,
                isError: false,
                datapopuler: action.payload.data.data
            }
        default:
            return state;
      }
      
  })