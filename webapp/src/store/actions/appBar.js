import { appbarTypes } from "../types"

export const setTitle = title => ({
    type: appbarTypes.SET_APP_BAR_TITLE,
    payload: {
        title,
    },
})

export const setLeft = (type, options = {}) => ({
    type: appbarTypes.SET_APP_BAR_LEFT,
    payload: {
        type,
        options,
    },
})

export const setRight = (type, options = {}) => ({
    type: appbarTypes.SET_APP_BAR_RIGHT,
    payload: {
        type,
        options,
    },
})

export const disable = () => ({
    type: appbarTypes.DISABLE,
})
