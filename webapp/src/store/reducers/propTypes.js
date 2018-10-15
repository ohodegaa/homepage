import { propTypeTypes } from "../types"

export default (state, action) => {
    let newState = { ...state, message: (action.payload && action.payload.message) || null }
    switch (action.type) {
        /* GET ALL PROPTYPES */

        case propTypeTypes.GET_PROPTYPES:
            return {
                ...newState,
                fetching: true,
            }
        case propTypeTypes.GET_PROPTYPES_FULFILLED:
            return {
                ...newState,
                data: {
                    ...action.payload.propTypes,
                },
                fetching: false,
            }
        case propTypeTypes.GET_PROPTYPES_REJECTED:
            return {
                ...newState,
                fetching: false,
            }
        default:
            return { ...newState }
    }
}
