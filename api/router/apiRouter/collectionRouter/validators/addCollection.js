const { check } = require("express-validator/check")

module.exports = [
    check("name")
        .isString()
        .withMessage("A valid collection name was not provided"),
    check("properties")
        .isArray()
        .withMessage("You must provide an array of valid properties."),
]
