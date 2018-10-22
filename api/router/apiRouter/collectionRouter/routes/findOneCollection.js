const Collection = require("../../../../db/models/collection").model

module.exports = (req, res) => {
    Collection.findOne({ _id: req.params.id })
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
                        message: "Error fetching the collection",
                        description: "The server was unable to fetch collection with id " + req.params.id,
                    },
                ],
            })
        })
}
