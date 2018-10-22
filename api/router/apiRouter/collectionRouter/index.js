const express = require("express")
const router = express.Router()

const authCheck = require("../../../utils/authenticate")

const validate = require("../../../utils/validate")

const recordRouter = require("./recordRouter")

const addCollectionValidators = require("./validators/addCollection")
const deleteCollectionValidators = require("./validators/deleteCollection")
const findAllCollectionsValidators = require("./validators/findAllCollections")
const findOneCollectionValidators = require("./validators/findOneCollection")
const updateCollectionValidators = require("./validators/updateCollection")

const addCollection = require("./routes/addCollection")
const deleteCollection = require("./routes/deleteCollection")
const findAllCollections = require("./routes/findAllCollections")
const findOneCollection = require("./routes/findOneCollection")
const updateCollection = require("./routes/updateCollection")
const setCollection = require("./helpers/setCollection")

router.use(authCheck)

router.use("/:collectionId/records", setCollection, recordRouter)

router.post(
    "/",
    validate(addCollectionValidators, "One or more field are not valid for registering a new collection"),
    addCollection,
)

router.get(
    "/",
    validate(findAllCollectionsValidators, "One or more field are not valid for for fetching all collections"),
    findAllCollections,
)
router.get(
    "/:id",
    validate(findOneCollectionValidators, "One or more field are not valid for for fetching the collection"),
    findOneCollection,
)
router.patch(
    "/:id",
    validate(updateCollectionValidators, "One or more fields are not valid for updating the collection"),
    updateCollection,
)
router.delete(
    "/:id",
    validate(deleteCollectionValidators, "One or more fields are not valid for deleting the collection"),
    deleteCollection,
)

module.exports = router
