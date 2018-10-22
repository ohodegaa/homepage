const express = require("express")
const router = express.Router()

const authCheck = require("../../../utils/authenticate")

const validate = require("../../../utils/validate")

const addPropertyTypeValidators = require("./validators/addPropertyType")
const deletePropertyTypeValidators = require("./validators/deletePropertyType")
const findAllValidators = require("./validators/findAllPropertyTypes")
const findOneValidators = require("./validators/findOnePropertyType")
const updatePropertyTypeValidators = require("./validators/updatePropertyType")

const addPropertyType = require("./routes/addPropertyType")
const deletePropertyType = require("./routes/deletePropertyType")
const findAllPropertyTypes = require("./routes/findAllPropertyTypes")
const findOnePropertyType = require("./routes/findOnePropertyType")
const updatePropertyType = require("./routes/updatePropertyType")

router.use(authCheck)

router.post(
    "/",
    validate(addPropertyTypeValidators, "One or more field are not valid for registering a new prop type"),
    addPropertyType,
)

router.get(
    "/",
    validate(findAllValidators, "One or more field are not valid for for fetching all prop types"),
    findAllPropertyTypes,
)
router.get(
    "/:id",
    validate(findOneValidators, "One or more field are not valid for for fetching the prop type"),
    findOnePropertyType,
)
router.patch(
    "/:id",
    validate(updatePropertyTypeValidators, "One or more fields are not valid for updating the prop type"),
    updatePropertyType,
)
router.delete(
    "/:id",
    validate(deletePropertyTypeValidators, "One or more fields are not valid for deleting the prop type"),
    deletePropertyType,
)

module.exports = router
