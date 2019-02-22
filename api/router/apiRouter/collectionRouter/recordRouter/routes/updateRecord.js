const getModel = require("../helpers/getModel")
const throwError = require("../../../../../utils/throwError")

module.exports = (req, res) => {
    return new Promise(resolve => {
        const model = getModel(req.Collection)
        resolve(model.findOneAndUpdate({ _id: req.params.id }, { $set: { ...req.body } }, { new: true }).exec())
    })
        .then(record => {
            if (!record) {
                throwError(
                    404,
                    "No record from collection " + req.Collection.name + " was found with id " + req.params.id,
                )
            }
            res.status(200).json({
                [req.Collection._collectionName]: record,
                messaged: [
                    {
                        type: "success",
                        message: "The record was updated",
                        description: "The records was successfully updated",
                    },
                ],
            })
        })
        .catch(() => {
            res.status(500).json({
                messages: [
                    {
                        type: "error",
                        message: "Error updating the property type",
                        description: "The server was unable to update property type with id " + req.params.id,
                    },
                ],
            })
        })
}
