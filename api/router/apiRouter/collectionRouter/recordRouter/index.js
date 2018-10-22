const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const getSchemaDef = require("../../../../utils/propertyTypes").getSchemaDef
const authCheck = require("../../../../utils/authenticate")

const validate = require("../../../../utils/validate")
const getModel = require("./helpers/getModel")

const addRecordValidators = require("./validators/addRecord")
const deleteRecordValidators = require("./validators/deleteRecord")
const findAllRecordsValidators = require("./validators/findAllRecords")
const findOneRecordValidators = require("./validators/findOneRecord")
const updateRecordValidators = require("./validators/updateRecord")

const addRecord = require("./routes/addRecord")
const deleteRecord = require("./routes/deleteRecord")
const findAllRecords = require("./routes/findAllRecords")
const findOneRecord = require("./routes/findOneRecord")
const updateRecord = require("./routes/updateRecord")
router.use(authCheck)


router.post(
    "/",
    validate(addRecordValidators, "One or more field are not valid for registering a new record"),
    addRecord,
)

router.get(
    "/",
    validate(findAllRecordsValidators, "One or more field are not valid for for fetching all records"),
    findAllRecords,
)
router.get(
    "/:id",
    validate(findOneRecordValidators, "One or more field are not valid for for fetching the record"),
    findOneRecord,
)
router.patch(
    "/:id",
    validate(updateRecordValidators, "One or more fields are not valid for updating the record"),
    updateRecord,
)
router.delete(
    "/:id",
    validate(deleteRecordValidators, "One or more fields are not valid for deleting the record"),
    deleteRecord,
)

module.exports = router
