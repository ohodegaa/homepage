import { appbarTypes } from "../types"

export default (state, action) => {
    switch (action.type) {
        /* LOG_IN */
        case appbarTypes.SET_APPBAR_TITLE:
            return {
                ...state,
                ...action.payload,
            }
        case appbarTypes.SET_APPBAR_LEFT:
            return {
                ...state,
                left: {
                    ...action.payload,
                },
            }
        case appbarTypes.SET_APPBAR_RIGHT:
            return {
                ...state,
                right: {
                    ...action.payload,
                },
            }
        case appbarTypes.SET_APPBAR_CLASSES:
            return {
                ...state,
                ...action.payload,
            }

        case appbarTypes.DISABLE:
            return null

        default:
            return {
                ...state,
            }
    }
}
