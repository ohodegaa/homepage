const { param } = require("express-validator/check")

module.exports = [
    param("id")
        .exists()
        .isMongoId()
        .withMessage("You must provide a valid id"),
]
