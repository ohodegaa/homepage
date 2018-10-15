const { check } = require("express-validator/check")

module.exports = [
    check("username")
        .isString()
        .withMessage("You must provide a valid username"),
    check("password")
        .isString()
        .withMessage("You must provide a valid password"),
]
