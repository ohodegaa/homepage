const User = require("../../../../db/models/user")

module.exports = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, { $set: { ...req.body } }, { new: true })
        .exec()
        .then(user => {
            res.status(200).json({
                user,
            })
        })
        .catch(() => {
            res.status(500).json({
                messages: [
                    {
                        type: "error",
                        message: "Error updating the user",
                        description: "The server was unable to update user with id " + req.params.id,
                    },
                ],
            })
        })
}
