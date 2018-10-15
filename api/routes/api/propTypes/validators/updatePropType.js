const { check } = require("express-validator/check")
const { getValidatorKeys } = require("../../../../utils/validators")
module.exports = [
    check("name")
        .exists()
        .isString()
        .withMessage("A valid prop name was not provided"),
    check("validators")
        .optional()
        .isArray()
        .isIn(getValidatorKeys())
        .withMessage(
            "You must provide an array of valid validators. Valid validators are " + getValidatorKeys().join(", "),
        ),
]
