import { AsyncStorage } from "react-native";

const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

export default ( paket = (state = initialState, action) =>{
    switch (action.type){
        case 'GET_PAKET_PENDING':
            return{
                isLoading: true
            }
        case 'GET_PAKET_REJECTED':
            return{
                isLoading:false,
                isError:true
            }
        case 'GET_PAKET_FULFILLED':
            return{
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
        case 'GET_DETAIL_PENDING':
            return{
                isLoading: true
            }
        case 'GET_DETAIL_REJECTED':
            return{
                isLoading:false,
                isError:true
            }
        case 'GET_DETAIL_FULFILLED':
            return{
                isLoading: false,
                isError: false,
                data: action.payload.data.data,
                image: action.payload.data.image,
                price: action.payload.data.price,
                total: action.payload.data.total
            }
        default:
            return state;
    }
})