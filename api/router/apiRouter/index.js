const express = require("express")
const router = express.Router()
const authRouter = require("./authRouter")
const userRouter = require("./userRouter")
const propertyRouter = require("./propertyRouter")
const collectionRouter = require("./collectionRouter")
//const propTypeRouter = require("./propertyTypeRouter")

router.use("/auth", authRouter)
router.use("/users", userRouter)
router.use("/properties", propertyRouter)
router.use("/collections", collectionRouter)
//router.use("/proptypes", propTypeRouter)
module.exports = router
