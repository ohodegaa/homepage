const Collection = require("../../../../db/models/collection").model

module.exports = (req, res) => {
    Collection.findOneAndUpdate({ _id: req.params.id }, { $set: { ...req.body } }, { new: true })
        .exec()
        .then(collection => {
            res.status(200).json({
                collection,
            })
        })
        .catch(() => {
            res.status(500).json({
                messages: [
                    {
                        type: "error",
                        message: "Error updating the collection",
                        description: "The server was unable to update collection with id " + req.params.id,
                    },
                ],
            })
        })
}
