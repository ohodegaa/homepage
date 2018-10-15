import { createStore, applyMiddleware } from "redux"
import reducer from "./reducers/index"
import logger from "redux-logger"
import promise from "redux-promise-middleware"
import thunk from "redux-thunk"

const initialState = {
    auth: null,
    appbar: null,
    propTypes: null,
    propType: null,
    props: null,
    prop: null,
}

export default createStore(
    reducer,
    initialState,
    applyMiddleware(logger, thunk, promise()),
)
