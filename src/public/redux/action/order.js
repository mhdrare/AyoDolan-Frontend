import api from "../../api"; //"https://ayodolanbackend.herokuapp.com/"
import Axios from "axios";

export const postOrder = (data) =>{
    return{
        type:'POST_ORDER',
        payload:Axios.post(api+'order')
    }
}

export const postTransaksi = (data) =>{
    console.log(data)
    return{
        type:'POST_TRANSAKSI',
        payload: Axios.post(api+'transaksi',{id_transaksi:data.id, keterangan: data.Keterangan, va:data.va,dn:data.displayName })
    }
}