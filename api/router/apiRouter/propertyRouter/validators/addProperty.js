const { check } = require("express-validator/check")
const { getPropertyTypeKeys } = require("../../../../utils/propertyTypes")
module.exports = [
    check("name")
        .exists()
        .isString()
        .withMessage("The name must be a valid text"),
    check("description")
        .optional()
        .isString()
        .withMessage("The description must be a valid text"),
    check("propertyType")
        .optional()
        .isString()
        .isIn(getPropertyTypeKeys())
        .withMessage(
            "You must provide a valid property type. Valid property types are " + getPropertyTypeKeys().join(", "),
        ),
    check("isArray")
        .optional()
        .isBoolean()
        .withMessage("If the property should be a list, a valid indicator of true or false should be provided"),
]
