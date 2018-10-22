import axios from "axios"
const URL = process.env.REACT_APP_API_URL + "/properties"

const getProperties = () => {
    return axios.get(URL + "/")
}

const getProperty = id => {
    return axios.get(URL + "/${id}")
}

const deleteProperty = id => {
    return axios.delete(URL + "/${id}")
}

const addProperty = data => {
    return axios.post(URL + "/", data)
}

const updateProperty = data => {
    return axios.patch(URL + "/", data)
}

export default {
    getProperties,
    getProperty,
    deleteProperty,
    addProperty,
    updateProperty,
}
