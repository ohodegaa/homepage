import propTypesApi from "../../utils/api/propTypes"
import { propTypeTypes } from "../types"

export const getPropTypes = () => ({
    type: propTypeTypes.GET_PROPTYPES,
    payload: propTypesApi.getPropTypes(),
})

export const getPropType = id => ({
    type: propTypeTypes.GET_PROPTYPE,
    payload: propTypesApi.getPropType(id),
})

export const deletePropType = id => ({
    type: propTypeTypes.DELETE_PROPTYPE,
    payload: propTypesApi.deletePropType(id),
})

export const addPropType = data => ({
    type: propTypeTypes.ADD_PROPTYPE,
    payload: propTypesApi.addPropType(data),
})

export const updatePropType = data => ({
    type: propTypeTypes.UPDATE_PROPTYPE,
    payload: propTypesApi.updatePropType(data),
})
