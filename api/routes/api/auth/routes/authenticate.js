const User = require("../../../../db/models/user")
const jwt = require("jsonwebtoken")

module.exports = (req, res) => {
    User.findOne({ _id: req.user._id })
        .exec()
        .then(user => {
            let token = "Bearer " + jwt.sign({ user }, process.env.JWT_SECRET)
            res.status(200).json({
                user,
                token,
            })
        })
        .catch(() => {
            res.status(401).json({
                message: {
                    type: "error",
                    message: "Error authenticating the user",
                    description: "No user was found with that id",
                },
            })
        })
}
