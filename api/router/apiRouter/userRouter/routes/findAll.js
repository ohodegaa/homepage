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
                messages: [
                    {
                        type: "error",
                        message: "Error fetching userRouter",
                        description: "The server was unable to fetch all userRouter from database",
                    },
                ],
            })
        })
}
