const User = require("../../../../db/models/user")

module.exports = (req, res) => {
    User.find()
        .exec()
        .then(users => {
            res.status(200).json({
                users,
            })
        })
        .catch(() => {
            res.status(500).json({
                error: {
                    message: "Error fetching users",
                    description: "The server was unable to fetch all users from database",
                },
            })
        })
}
