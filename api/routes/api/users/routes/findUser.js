const User = require("../../../../db/models/user")

module.exports = (req, res) => {
    User.findOne({ _id: req.params.id })
        .exec()
        .then(user => {
            res.status(200).json({
                user,
            })
        })
        .catch(() => {
            res.status(500).json({
                error: {
                    message: "Error fetching the user",
                    description: "The server was unable to fetch user with id " + req.params.id,
                },
            })
        })
}
