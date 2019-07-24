import api from "../../api"; //"https://ayodolanbackend.herokuapp.com/"
import Axios from "axios";

export const getDestinasi = () => {
    return{
        type:'GET_DESTINASI',
        payload: Axios.get(api+'destinasi')
    }
}

export const getPopular = () =>{
    return{
        type:'GET_POPULAR',
        payload: Axios.get(api+'populardes')
    }
}