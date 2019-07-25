import { AsyncStorage } from "react-native";

const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

export default ( order = (state = initialState, action)=>{
    switch(action.type){
        case 'POST_TRANSAKSI_PENDING':
            return{
                isLoading: true
            }
        case 'POST_TRANSAKSI_REJECTED':
            return{
                isLoading:false,
                isError:true
            }
        case 'POST_TRANSAKSI_FULFILLED':
            return{
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
        case 'POST_ORDER_PENDING':
            return{
                isLoading: true
            }
        case 'POST_ORDER_REJECTED':
            return{
                isLoading:false,
                isError:true
            }
        case 'POST_ORDER_FULFILLED':
            return{
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
        default:
            return state;
    }
})