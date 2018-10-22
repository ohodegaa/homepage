const { check } = require("express-validator/check")

module.exports = [
    check("username")
        .exists()
        .isString()
        .withMessage("A valid username was not provided"),
    check("password")
        .exists()
        .isString()
        .isLength({ min: 4, max: 24 })
        .withMessage("You must provide a password with minimum length 8"),
]
