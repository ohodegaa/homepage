const throwError = require("../../../../../utils/throwError")
const getModel = require("../helpers/getModel")

module.exports = (req, res) => {
    return new Promise(resolve => {
        const model = getModel(req.Collection)
        resolve(model.findOneAndDelete({ _id: req.params.id }).exec())
    })
        .then(delRes => {
            if (!delRes) {
                throwError(404, "No record was found with id " + req.params.id)
            } else {
                res.status(200).json({
                    messages: [
                        {
                            type: "success",
                            message: "Record deleted successfully",
                            description: "The record was successfully deleted from collection " + req.Collection.name,
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
                        message: "Error deleting the record",
                        description: err.description || "Unknown error deleting the record",
                    },
                ],
            })
        })
}
