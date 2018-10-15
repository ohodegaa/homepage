import { combineReducers } from "redux"
import authReducer from "./auth"
import appbarReducer from "./appbar"
import propTypesReducer from "./propTypes"
import propTypeReducer from "./propType"

export default combineReducers({
    auth: authReducer,
    appbar: appbarReducer,
    propTypes: propTypesReducer,
    propType: propTypeReducer,
})
