import api from "../../api"; //"https://ayodolanbackend.herokuapp.com/"
import Axios from "axios";

export const getUser = (id) =>{    
    return{
        type:'GET_USER',
        payload:Axios.get(api+`users/${id}`)
    }
}