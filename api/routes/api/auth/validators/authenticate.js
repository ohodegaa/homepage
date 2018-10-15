const { header } = require("express-validator/check")

module.exports = [
    header("Authorization")
        .exists()
        .withMessage("You must provide a valid authentication token"),
]
