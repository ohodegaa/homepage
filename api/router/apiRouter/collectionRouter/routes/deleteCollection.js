const Collection = require("../../../../db/models/collection").model
const throwError = require("../../../../utils/throwError")

module.exports = (req, res) => {
    Collection.findOneAndDelete({ _id: req.params.id })
        .exec()
        .then(delRes => {
            if (!delRes) {
                throwError(404, "No collection found with id " + req.params.id)
            } else {
                res.status(200).json({
                    messages: [
                        {
                            type: "success",
                            message: "Collection deleted successfully",
                            description: "Collection " + delRes.name + " deleted successfully",
                        },
                    ],
                })
            }
        })
        .catch(err => {
            res.status(err.status || 404).json({
                messages: [
                    {
                        type: "error",
                        message: "Error deleting the collection",
                        description: err.description || "Unknown error deleting collection",
                    },
                ],
            })
        })
}
