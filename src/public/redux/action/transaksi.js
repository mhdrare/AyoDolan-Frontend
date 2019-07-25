import api from "../../api"; //"https://ayodolanbackend.herokuapp.com/"
import Axios from "axios";


export const getTransaksi = (id) =>{
    return{
        type:'GET_TRANS',
        payload: Axios.get(api+`transaksi?id=${id}`)
    }
}