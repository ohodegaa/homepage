const { param } = require("express-validator/check")
const mongoose = require("mongoose")

module.exports = [
    param("id")
        .exists()
        .isString()
        .custom(id => {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return Promise.reject()
            } else {
                return Promise.resolve()
            }
        })
        .withMessage("You must provide a valid id"),
]
