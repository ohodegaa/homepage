import { API_URL } from "../../../config"
import axios from "axios"

const getPropTypes = () => {
    return axios.get(API_URL + "/proptypes")
}

const getPropType = id => {
    return axios.get(API_URL + "/proptypes/${id}")
}

const deletePropType = id => {
    return axios.delete(API_URL + "/proptypes/${id}")
}

const addPropType = data => {
    return axios.post(API_URL + "/proptypes", data)
}

const updatePropType = data => {
    return axios.patch(API_URL + "/proptypes", data)
}

export default {
    getPropTypes,
    getPropType,
    deletePropType,
    addPropType,
    updatePropType,
}
