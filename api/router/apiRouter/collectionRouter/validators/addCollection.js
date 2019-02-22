const { check } = require("express-validator/check")
const validator = require("validator")

module.exports = [
    check("name")
        .isString()
        .withMessage("A valid collection name was not provided"),
    check("properties")
        .isArray()
        .custom(properties => properties.every(prop => validator.isMongoId(prop)))
        .withMessage("You must provide an array of valid properties."),
]
