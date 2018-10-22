const URL = process.env.REACT_APP_URL + "/propertytypes"
import axios from "axios"

const getPropertyTypes = () => {
    return axios.get(URL + "/")
}

const getPropertyType = id => {
    return axios.get(URL + "/${id}")
}

const deletePropertyType = id => {
    return axios.delete(URL + "/${id}")
}

const addPropertyType = data => {
    return axios.post(URL + "/", data)
}

const updatePropertyType = data => {
    return axios.patch(URL + "/", data)
}

export default {
    getPropertyTypes,
    getPropertyType,
    deletePropertyType,
    addPropertyType,
    updatePropertyType,
}
