const User = require("../../../../db/models/user")
const throwError = require("../../../../utils/throwError")

module.exports = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .exec()
        .then(delRes => {
            if (delRes.n <= 0) {
                throwError(404, "No user was found with id " + req.params.id)
            } else {
                res.sendStatus(200)
            }
        })
        .catch(e => {
            console.log(e)
            res.status(404).json({
                error: {
                    message: "Error deleting the user",
                    description: "Could not delete user with id " + req.params.id,
                },
            })
        })
}
