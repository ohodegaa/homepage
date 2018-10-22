const getRequestValidator = require("../../../../../utils/propertyTypes").getRequestValidator
const validate = require("../../../../../utils/validate")

/**
 *
 * @param errorMessage: (String) Error message to be sent to the client in case of not valid input
 * @param allOptional: (Boolean) Indicating if all properties should be optional
 * @returns {function(*): (Array|validators)}
 */

const validateAllProperties = (errorMessage, allOptional) => req => {
    const checkers = req.Collection.properties(prop =>
        getRequestValidator(prop.key, prop.propertyType, "body", allOptional),
    )
    return validate(checkers, errorMessage)
}

const allPropertiesOptional = errorMessage => validateAllProperties(errorMessage, true)

const allPropertiesRequired = errorMessage => validateAllProperties(errorMessage, false)
