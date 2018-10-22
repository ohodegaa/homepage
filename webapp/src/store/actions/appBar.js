import { appbarTypes } from "../types"

export const setTitle = title => ({
    type: appbarTypes.SET_APPBAR_TITLE,
    payload: {
        title,
    },
})

export const setLeft = (type, options = {}) => ({
    type: appbarTypes.SET_APPBAR_LEFT,
    payload: {
        type,
        options,
    },
})

export const setRight = (type, options = {}) => ({
    type: appbarTypes.SET_APPBAR_RIGHT,
    payload: {
        type,
        options,
    },
})

export const setAppbarClasses = appbarClasses => ({
    type: appbarTypes.SET_APPBAR_CLASSES,
    payload: {
        appbarClasses,
    },
})

export const disable = () => ({
    type: appbarTypes.DISABLE,
})
