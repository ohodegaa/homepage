const express = require("express")
const router = express.Router()

const authCheck = require("../../../utils/authenticate")

const validate = require("../../../utils/validate")

const addPropertyValidators = require("./validators/addProperty")
const deletePropertyValidators = require("./validators/deleteProperty")
const findAllPropertiesValidators = require("./validators/findAllProperties")
const findOneValidators = require("./validators/findOneProperty")
const updatePropertyValidators = require("./validators/updateProperty")

const addProperty = require("./routes/addProperty")
const deleteProperty = require("./routes/deleteProperty")
const findAllProperties = require("./routes/findAllProperties")
const findOneProperty = require("./routes/findOneProperty")
const updateProperty = require("./routes/updateProperty")

router.use(authCheck)

router.post(
    "/",
    validate(addPropertyValidators, "One or more field are not valid for registering a new property"),
    addProperty,
)

router.get(
    "/",
    validate(findAllPropertiesValidators, "One or more field are not valid for fetching all properties"),
    findAllProperties,
)
router.get(
    "/:id",
    validate(findOneValidators, "One or more field are not valid for fetching the property"),
    findOneProperty,
)
router.patch(
    "/:id",
    validate(updatePropertyValidators, "One or more fields are not valid for updating the property"),
    updateProperty,
)
router.delete(
    "/:id",
    validate(deletePropertyValidators, "One or more fields are not valid for deleting the property"),
    deleteProperty,
)

module.exports = router
