const { check } = require("express-validator/check")
const { getPropertyTypeKeys } = require("../../../../utils/propertyTypes")
module.exports = [
    check("name")
        .exists()
        .isString()
        .withMessage("A valid prop name was not provided"),
    check("validators")
        .optional()
        .isArray()
        .isIn(getPropertyTypeKeys())
        .withMessage(
            "You must provide an array of valid validators. Valid validators are " + getPropertyTypeKeys().join(", "),
        ),
]
