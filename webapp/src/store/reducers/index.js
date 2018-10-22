import { combineReducers } from "redux"
import appbarReducer from "./appbar"
import apiReducer from "./apiReducer"

export default combineReducers({
    appbar: appbarReducer,
    profile: apiReducer("user"),
    //propertyTypes: apiReducer("propTypes"),
    //propertyType: apiReducer("propType"),
    properties: apiReducer("properties"),
    property: apiReducer("property"),
})
