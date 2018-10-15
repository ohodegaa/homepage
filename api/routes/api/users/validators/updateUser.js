const { check } = require("express-validator/check")

module.exports = [
    check("username")
        .optional()
        .isString()
        .withMessage("A valid username was not provided"),
    check("name")
        .optional()
        .isString()
        .withMessage("You must provide a valid name"),
    check("mail")
        .optional()
        .isEmail()
        .withMessage("You must provide a valid email"),
    check("phone")
        .optional()
        .isMobilePhone()
        .withMessage("You must provide a valid phone number"),
]
