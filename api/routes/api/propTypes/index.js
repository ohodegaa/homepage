const express = require("express")
const router = express.Router()

const authCheck = require("../../../utils/authenticate")

const validate = require("../../../utils/validate")

const addPropTypeValidators = require("./validators/addPropType")
const deletePropTypeValidators = require("./validators/deletePropType")
const findAllValidators = require("./validators/findAllPropTypes")
const findOneValidators = require("./validators/findOnePropType")
const updatePropTypeValidators = require("./validators/updatePropType")

const addPropType = require("./routes/addPropType")
const deletePropType = require("./routes/deletePropType")
const findAllPropTypes = require("./routes/findAllPropTypes")
const findOnePropType = require("./routes/findOnePropType")
const updatePropType = require("./routes/updatePropType")

router.use(authCheck)

router.post(
    "/",
    validate(addPropTypeValidators, "One or more field are not valid for registering a new prop type"),
    addPropType,
)

router.get(
    "/",
    validate(findAllValidators, "One or more field are not valid for for fetching all prop types"),
    findAllPropTypes,
)
router.get(
    "/:id",
    validate(findOneValidators, "One or more field are not valid for for fetching the prop type"),
    findOnePropType,
)
router.patch(
    "/:id",
    validate(updatePropTypeValidators, "One or more fields are not valid for updating the prop type"),
    updatePropType,
)
router.delete(
    "/:id",
    validate(deletePropTypeValidators, "One or more fields are not valid for deleting the prop type"),
    deletePropType,
)

module.exports = router
