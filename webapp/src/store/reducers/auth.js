import { authTypes } from "../types"
import { setToken } from "../../utils/localStorage"

export default (state, action) => {
    let newState = { ...state, message: (action.payload && action.payload.message) || null }

    switch (action.type) {
        /* LOG_IN */
        case authTypes.LOG_IN:
            return {
                ...newState,
                fetching: true,
            }
        case authTypes.LOG_IN_FULFILLED:
            setToken(action.payload.token)
            return {
                user: {
                    ...action.payload.user,
                },
                fetching: false,
            }
        case authTypes.LOG_IN_REJECTED:
            return {
                ...newState,
                fetching: false,
            }

        /* REGISTER */
        case authTypes.REGISTER:
            return {
                ...newState,
                fetching: true,
            }
        case authTypes.REGISTER_FULFILLED:
            setToken(action.payload.token)
            return {
                user: {
                    ...action.payload.user,
                },
                fetching: false,
            }
        case authTypes.REGISTER_REJECTED:
            return {
                ...newState,
                fetching: false,
            }

        /* AUTHENTICATE */

        case authTypes.AUTHENTICATE:
            return {
                ...newState,
                fetching: true,
            }

        case authTypes.AUTHENTICATE_FULFILLED:
            return {
                ...newState,
                user: {
                    ...action.payload.user,
                },
            }

        case authTypes.AUTHENTICATE_REJECTED:
            return {
                ...newState,
                fetching: false,
            }

        default:
            return { ...newState }
    }
}
