const { param } = require("express-validator/check")

module.exports = [
    param("id")
        .isMongoId()
        .withMessage("You must provide a valid id"),
]
