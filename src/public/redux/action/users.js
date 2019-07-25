import api from "../../api"; //"https://ayodolanbackend.herokuapp.com/"
import Axios from "axios";

export const getUser = (id) =>{
    console.log('userrrrrr');
    console.log(id);
    
    return{
        type:'GET_USER',
        payload:Axios.get(api+`users/${id}`)
    }
}
