const validator = require("validator")
const mongoose = require("mongoose")
const { check, param } = require("express-validator")

const propertyTypes = {
    string: {
        schemaDef: {
            type: String,
        },
        name: "Text",
        description: "A single- or multiple-line of text",
        validator: value => validator.isString(value),
        requestValidator: checker => checker.isString(),
    },
    email: {
        schemaDef: {
            type: String,
        },
        name: "Email address",
        description: "An email address",
        validator: value => validator.isEmail(value),
        requestValidator: checker => checker.isEmail(),
    },
    mongoId: {
        schemaDef: {
            type: mongoose.Schema.ObjectId,
            ref: null,
        },
        name: "Data reference",
        description: "Reference to a record from another collection",
        validator: value => validator.isMongoId(value),
        requestValidator: checker => checker.isMongoId(),
    },
    boolean: {
        schemaDef: {
            type: Boolean,
        },
        name: "Switch",
        description: "A field indicating true or false (on or off)",
        validator: value => validator.isBoolean(value),
        requestValidator: checker => checker.isBoolean(),
    },
    date: {
        schemaDef: {
            type: Date,
        },
        name: "Date",
        description: "A date",
        validator: value => validator.isDate(value),
        requestValidator: checker => checker.isDate(),
    },
    number: {
        schemaDef: {
            type: String,
        },
        name: "Number",
        description: "A number, an integer or a decimal number",
        validator: value => validator.isNumeric(value),
        requestValidator: checker => checker.isNumeric(),
    },
    phone: {
        schemaDef: {
            type: String,
        },
        description: "A phone number",
        name: "Phone number",
        validator: value => validator.isMobilePhone(value),
        requestValidator: checker => checker.isMobilePhone(),
    },
}

const getPropertyTypes = () => propertyTypes

const getPropertyTypeKeys = () => Object.keys(propertyTypes)

const getValidator = key => propertyTypes[key]

const isValid = (key, value) => propertyTypes[key] && propertyTypes[key].validator(value)

const isValidArrayOf = (key, arr) => propertyTypes[key] && arr.every(propertyTypes[key.validator])

const getSchemaDef = key => propertyTypes[key].schemaDef

const getRequestValidator = (field, propertyType, location = "body", optional = false, message = null) => {
    let checker
    if (location === "param") {
        checker = param(field)
    } else {
        checker = check(field)
    }
    if (optional) {
        checker = checker.optional()
    }
    return propertyTypes[propertyType].requestValidator(checker).withMessage(message)
}

module.exports = {
    getValidator,
    getPropertyTypes,
    isValid,
    getPropertyTypeKeys,
    isValidArrayOf,
    getSchemaDef,
    getRequestValidator,
}
