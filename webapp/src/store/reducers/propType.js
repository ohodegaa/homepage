import { propTypeTypes } from "../types"

export default (state, action) => {
    let newState = { ...state, message: (action.payload && action.payload.message) || null }
    switch (action.type) {
        /* ADD PROPTYPE */

        case propTypeTypes.ADD_PROPTYPE:
            return {
                ...newState,
                fetching: true,
            }
        case propTypeTypes.ADD_PROPTYPE_FULFILLED:
            return {
                ...newState,
                data: {
                    ...action.payload.propType,
                },
                fetching: false,
            }
        case propTypeTypes.ADD_PROPTYPE_REJECTED:
            return {
                ...newState,
                fetching: false,
            }

        /* GET ONE PROPTYPE */

        case propTypeTypes.GET_PROPTYPE:
            return {
                ...newState,
                fetching: true,
            }
        case propTypeTypes.GET_PROPTYPE_FULFILLED:
            return {
                ...newState,
                data: {
                    ...action.payload.propType,
                },
                fetching: false,
            }
        case propTypeTypes.GET_PROPTYPE_REJECTED:
            return {
                ...newState,
                fetching: false,
            }

        /* DELETE PROPTYPE */

        case propTypeTypes.DELETE_PROPTYPE:
            return {
                ...newState,
                fetching: true,
            }
        case propTypeTypes.DELETE_PROPTYPE_FULFILLED:
            return {
                ...newState,
                data: null,
                fetching: false,
            }
        case propTypeTypes.DELETE_PROPTYPE_REJECTED:
            return {
                ...newState,
                fetching: false,
            }

        /* UPDATE PROPTYPE */

        case propTypeTypes.UPDATE_PROPTYPE:
            return {
                ...newState,
                fetching: true,
            }
        case propTypeTypes.UPDATE_PROPTYPE_FULFILLED:
            return {
                ...newState,
                data: {
                    ...action.payload.propType,
                },
                fetching: false,
            }
        case propTypeTypes.UPDATE_PROPTYPE_REJECTED:
            return {
                ...newState,
                fetching: false,
            }
        default:
            return { ...newState }
    }
}
