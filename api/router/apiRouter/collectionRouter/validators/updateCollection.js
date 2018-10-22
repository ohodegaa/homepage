const { check, param } = require("express-validator/check")

module.exports = [
    param("id")
        .isMongoId()
        .withMessage("You must provide a valid collection id"),
    check("name")
        .optional()
        .isString()
        .withMessage("A valid name was not provided"),
    check("properties")
        .optional()
        .isArray()
        .withMessage("You must provide an array of valid properties"),
]
