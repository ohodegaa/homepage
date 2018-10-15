module.exports = (status, description) => {
    throw {
        status: status,
        description: description,
    }
}
