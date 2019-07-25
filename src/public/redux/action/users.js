import api from "../../api";
import Axios from "axios";

export const fetchUser = (id) => {
	return {
		type: "FETCH_USER",
		payload: Axios.get(api + `users/${id}`)
	}
}