const express = require("express")
const router = express.Router()

const authCheck = require("../../../utils/authenticate")

const validate = require("../../../utils/validate")
const updateUserValidators = require("./validators/updateUser")
const findAllValidators = require("./validators/findAll")
const findOneValidators = require("./validators/findUser")
const deleteUserValidators = require("./validators/deleteUser")
const addUserValidators = require("./validators/addUser")

const updateUser = require("./routes/updateUser")
const findUser = require("./routes/findUser")
const deleteUser = require("./routes/deleteUser")
const findAll = require("./routes/findAll")
const addUser = require("./routes/addUser")

router.use(authCheck)

router.get("/", validate(findAllValidators, "One or more field are not valid for for fetching all userRouter"), findAll)
router.get("/:id", validate(findOneValidators, "One or more field are not valid for for fetching the user"), findUser)
router.patch(
    "/:id",
    validate(updateUserValidators, "One or more fields are not valid for updating the user"),
    updateUser,
)
router.delete(
    "/:id",
    validate(deleteUserValidators, "One or more fields are not valid for deleting the user"),
    deleteUser,
)
router.post("/", validate(addUserValidators, "One or more field are not valid for registering a new user"), addUser)

module.exports = router
