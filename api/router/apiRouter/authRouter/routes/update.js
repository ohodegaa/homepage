const User = require("../../../../db/models/user").model

module.exports = (req, res) => {
    User.findOneAndUpdate({ _id: req.id }, { $in: { ...req.body } }, { new: true })
        .exec()
        .then(user => {
            res.status(200).json({
                user,
            })
        })
        .catch(() => {
            res.status(401).json({
                messages: [
                    {
                        type: "error",
                        message: "Error updating user",
                        description: "Unknown error updating the user",
                    },
                ],
            })
        })
}
