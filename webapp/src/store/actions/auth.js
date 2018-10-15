import authApi from "../../utils/api/auth"
import { authTypes } from "../types"

export const login = data => ({
    type: authTypes.LOG_IN,
    payload: authApi.login(data),
})

export const register = data => ({
    type: authTypes.REGISTER,
    payload: authApi.register(data),
})

export const authenticate = () => ({
    type: authTypes.AUTHENTICATE,
    payload: authApi.authenticate(),
})
