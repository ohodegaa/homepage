const User = require("../../../../db/models/user").model
const jwt = require("jsonwebtoken")
const throwError = require("../../../../utils/throwError")

module.exports = (req, res) => {
    User.findOne({ _id: req.user._id })
        .exec()
        .then(user => {
            if (!user) {
                throwError(401, "No user found with that id" + " (${req.user._id})")
            }
            let token = "Bearer " + jwt.sign({ user }, process.env.JWT_SECRET)
            res.status(200).json({
                user,
                token,
            })
        })
        .catch(err => {
            res.status(err.status || 500).json({
                messages: [
                    {
                        type: "error",
                        message: "Error authenticating the user",
                        description: err.description || "Unknown error authenticating the user",
                    },
                ],
            })
        })
}
