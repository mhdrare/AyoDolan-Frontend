import api from "../../api"; //"https://ayodolanbackend.herokuapp.com/"
import Axios from "axios";

export const addUser = dataReg => {
  let data = new FormData();
  data.append("name", dataReg.name);
  data.append("username", dataReg.username);
  data.append("email", dataReg.email);
  data.append("password", dataReg.password);
  data.append("gender", dataReg.gender);
  data.append("no_phone", dataReg.no_phone);
  data.append("image", dataReg.image);

  return {
    type: "ADD_USER",
    payload: Axios.post(api + "users", data)
  };
};

export const loginUser = dataLogin => {
  return {
    type: "LOGIN_USER",
    payload: Axios.post(api + "login", dataLogin)
  };
};
