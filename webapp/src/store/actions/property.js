import api from "../../utils/api/propertiesApi"
import { propertyTypes } from "../types"

export const getProperties = () => ({
    type: propertyTypes.GET_PROPERTY_TYPES,
    payload: api.getProperties(),
})

export const getProperty = id => ({
    type: propertyTypes.GET_PROPERTY_TYPE,
    payload: api.getProperty(id),
})

export const deleteProperty = id => ({
    type: propertyTypes.DELETE_PROPERTY_TYPE,
    payload: api.deleteProperty(id),
})

export const addProperty = data => ({
    type: propertyTypes.ADD_PROPERTY_TYPE,
    payload: api.addProperty(data),
})

export const updateProperty = data => ({
    type: propertyTypes.UPDATE_PROPERTY_TYPE,
    payload: api.updateProperty(data),
})
