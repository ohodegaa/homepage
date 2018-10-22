import { createStore, applyMiddleware } from "redux"
import reducer from "./reducers/index"
import logger from "redux-logger"
import promise from "redux-promise-middleware"
import thunk from "redux-thunk"

const initialState = {
    profile: {
        data: null,
        fetching: false,
        messages: [],
    },
    appbar: null,
    propertyTypes: {
        data: null,
        fetching: false,
        messages: [],
    },
    propertyType: {
        data: null,
        fetching: false,
        messages: [],
    },
    properties: {
        data: null,
        fetching: false,
        messages: [],
    },
    property: {
        data: null,
        fetching: false,
        messages: [],
    },
}

export default createStore(reducer, initialState, applyMiddleware(logger, thunk, promise()))
