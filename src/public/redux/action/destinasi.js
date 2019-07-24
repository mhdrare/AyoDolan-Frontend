import api from "../../api"; //"https://ayodolanbackend.herokuapp.com/"
import Axios from "axios";

export const getDestinasi = (limit) => {
    return{
        type:'GET_DESTINASI',
        payload: Axios.get(api+`destinasi?limit=${limit}`,)
    }
}

export const getPopular = (limit) =>{
    return{
        type:'GET_POPULAR',
        payload: Axios.get(api+'populardes')
    }
}