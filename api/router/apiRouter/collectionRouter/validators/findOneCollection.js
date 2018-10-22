const { param } = require("express-validator/check")

module.exports = [
    param("id")
        .exists()
        .withMessage("You must provide a valid prop id"),
]
