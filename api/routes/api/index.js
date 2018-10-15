const express = require("express")
const router = express.Router()
const authRouter = require("./auth")
const usersRouter = require("./users")
const propsRouter = require("./propTypes")

router.use("/auth", authRouter)
router.use("/users", usersRouter)
router.use("/propTypes", propsRouter)
module.exports = router
