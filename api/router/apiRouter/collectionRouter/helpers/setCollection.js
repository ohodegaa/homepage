const Collection = require("../../../../db/models/collection").model

module.exports = (req, res, next) => {
    Collection.findOne({ _id: req.params.collectionId })
        .populate("properties")
        .exec()
        .then(collection => {
            req.Collection = collection.toJSON()
            next()
        })
        .catch(() => {
            res.status(404).json({
                messages: [
                    {
                        type: "error",
                        message: "No collection found",
                        description: "No collection found with id " + req.params.collectionId,
                    },
                ],
            })
        })
}
