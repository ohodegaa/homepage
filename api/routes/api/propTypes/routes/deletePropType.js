const PropType = require("../../../../db/models/propType")
const throwError = require("../../../../utils/throwError")

module.exports = (req, res) => {
    PropType.deleteOne({ _id: req.params.id })
        .exec()
        .then(delRes => {
            if (delRes.n <= 0) {
                throwError(404, "No prop type was found with id " + req.params.id)
            } else {
                res.sendStatus(200)
            }
        })
        .catch(err => {
            res.status(err.status || 404).json({
                error: {
                    message: "Error deleting the prop type",
                    description: err.description || "Could not delete prop type",
                },
            })
        })
}
