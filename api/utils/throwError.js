module.exports = (status, description, param = null) => {
    throw {
        status,
        description,
        param,
    }
}
