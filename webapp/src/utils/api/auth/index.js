import { API_URL } from "../../../config"
import axios from "axios"

export const login = data => {
    return axios.post(API_URL + "/auth/login", data)
}
export const register = data => {
    return axios.post(API_URL + "/auth/register", data)
}
export const authenticate = () => {
    return axios.get(API_URL + "/auth")
}

export default {
    login,
    register,
    authenticate,
}
