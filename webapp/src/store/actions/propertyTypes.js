import api from "../../utils/api/propertyTypesApi"
import { propertyTypeTypes } from "../types"

export const getPropertyTypes = () => ({
    type: propertyTypeTypes.GET_PROPERTY_TYPES,
    payload: api.getPropertyTypes(),
})

export const getPropertyType = id => ({
    type: propertyTypeTypes.GET_PROPERTY_TYPE,
    payload: api.getPropertyType(id),
})

export const deletePropertyType = id => ({
    type: propertyTypeTypes.DELETE_PROPERTY_TYPE,
    payload: api.deletePropertyType(id),
})

export const addPropertyType = data => ({
    type: propertyTypeTypes.ADD_PROPERTY_TYPE,
    payload: api.addPropertyType(data),
})

export const updatePropertyType = data => ({
    type: propertyTypeTypes.UPDATE_PROPERTY_TYPE,
    payload: api.updatePropertyType(data),
})
