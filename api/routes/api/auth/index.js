const express = require("express")
const router = express.Router()

const authCheck = require("../../../utils/authenticate")

const validate = require("../../../utils/validate")
const updateValidators = require("./validators/update")
const loginValidators = require("./validators/login")
const registerValidators = require("./validators/register")
const authenticateValidators = require("./validators/authenticate")

const register = require("./routes/register")
const login = require("./routes/login")
const update = require("./routes/update")
const authenticate = require("./routes/authenticate")

router.get(
    "/",
    authCheck,
    validate(authenticateValidators, "One or more field are not valid for authenticating the user"),
    authenticate,
)
router.patch(
    "/",
    authCheck,
    validate(updateValidators, "One or more fields are not valid for updating the user"),
    update,
)
router.post("/login", validate(loginValidators, "One or more field are not valid for logging in the user"), login)
router.post(
    "/register",
    validate(registerValidators, "One or more field are not valid for registering the user"),
    register,
)

module.exports = router
