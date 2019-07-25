import api from "../../api"; //"https://ayodolanbackend.herokuapp.com/"
import Axios from "axios";

export const postOrder = (data) =>{
    console.log(data)
    return{
        type:'POST_ORDER',
        payload:Axios.post(api+'order',{id_user: data.id_user, id_destination: data.id_destination, id_transaksi: data.id_transaksi, category: data.category, date: data.date})
    }
}

export const postTransaksi = (data) =>{
    return{
        type:'POST_TRANSAKSI',
        payload: Axios.post(api+'transaksi',{id_transaksi:data.id, keterangan:'pending', va:data.va, dn: data.displayName, id_user:data.id_user, id_destination: data.id_destination, price_order: data.price, date: data.date })
    }
}