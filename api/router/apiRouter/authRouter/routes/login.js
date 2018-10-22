const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const User = require("../../../../db/models/user").model
const throwError = require("../../../../utils/throwError")

module.exports = (req, res) => {
    User.findOne({ $or: [{ username: req.body.username || "" }, { mail: req.body.mail || "" }] })
        .select("+password")
        .exec()
        .then(user => {
            if (!user) throwError(401, "No user found with username/email " + (req.body.username || req.body.mail))
            return user
        })
        .then(user => {
            let isValid = bcrypt.compareSync(req.body.password, user.password)
            if (!isValid) {
                throwError(401, "Password is incorrect. Please provide a valid password.")
            }
            let token = "Bearer " + jwt.sign({ user }, process.env.JWT_SECRET)

            res.status(200).json({
                user: user.getSafe(),
                token,
            })
        })
        .catch(err => {
            console.log(err)
            res.status(err.status || 500).json({
                messages: [
                    {
                        type: "error",
                        message: "Error logging in the user",
                        description: err.description || "Unknown error logging in the user",
                    },
                ],
            })
        })
}
