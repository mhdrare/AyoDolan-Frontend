import api from "../../api"; //"https://ayodolanbackend.herokuapp.com/"
import Axios from "axios";

export const getPaket = (id) =>{
    return{
        type:'GET_PAKET',
        payload: Axios.get(api+`paket?id=${id}`)
    }
}

export const detaiPaket = (id) =>{
    return{
        type:'GET_DETAIL',
        payload: Axios.get(api+`detailpaket?id_paket=${id}`)
    }
}