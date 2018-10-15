const { check } = require("express-validator/check")

module.exports = [
    check("username")
        .exists()
        .isString()
        .withMessage("A valid username was not provided"),
    check("password")
        .optional()
        .isString()
        .isLength({ min: 8, max: 24 })
        .withMessage("You must provide a password with minimum length 8"),
    check("name")
        .optional()
        .exists()
        .isString()
        .withMessage("The name you provided is not valid"),
    check("mail")
        .optional()
        .isEmail()
        .withMessage("The email you provided is not valid"),
    check("phone")
        .optional()
        .isMobilePhone()
        .withMessage("The phone number you provided is not valid"),
]
