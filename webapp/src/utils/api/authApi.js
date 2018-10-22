import axios from "axios"
const URL = process.env.REACT_APP_API_URL + "/auth"

export const login = data => {
    return axios.post(URL + "/login", data)
}
export const register = data => {
    return axios.post(URL + "/register", data)
}
export const authenticate = () => {
    return axios.get(URL + "/")
}

export default {
    login,
    register,
    authenticate,
}
