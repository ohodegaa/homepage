import { appbarTypes } from "../types"

export default (state, action) => {
    switch (action.type) {
        /* LOG_IN */
        case appbarTypes.SET_APP_BAR_TITLE:
            return {
                ...state,
                title: action.payload.title,
            }
        case appbarTypes.SET_APP_BAR_LEFT:
            return {
                ...state,
                left: {
                    type: action.payload.type,
                    options: action.payload.options,
                },
            }
        case appbarTypes.SET_APP_BAR_RIGHT:
            return {
                ...state,
                right: {
                    type: action.payload.type,
                    options: action.payload.options,
                },
            }

        case appbarTypes.DISABLE:
            return null

        default:
            return {
                ...state,
            }
    }
}
