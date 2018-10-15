const validator = require("validator")

const possibleValidators = {
    string: {
        name: "Text string",
        validator: value => validator.isString(value),
    },
    email: {
        name: "Email address",
        validator: value => validator.isEmail(value),
    },
    mongoId: {
        name: "Data reference",
        validator: value => validator.isMongoId(value),
    },
    boolean: {
        name: "Switch",
        validator: value => validator.isBoolean(value),
    },
    date: {
        name: "Date",
        validator: value => validator.isDate(value),
    },
    number: {
        name: "Number",
        validator: value => validator.isNumeric(value),
    },
    phone: {
        name: "Phone number",
        validator: value => validator.isMobilePhone(value),
    },
}

const getValidators = () => possibleValidators

const getValidatorKeys = () => Object.keys(possibleValidators)

const getValidator = key => possibleValidators[key]

const isValid = (key, value) => possibleValidators[key] && possibleValidators[key].validator(value)

module.exports = {
    getValidator,
    getValidators,
    isValid,
    getValidatorKeys,
}
