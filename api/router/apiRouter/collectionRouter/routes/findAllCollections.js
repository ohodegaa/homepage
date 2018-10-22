const Collection = require("../../../../db/models/collection").model
const _ = require("lodash")

module.exports = (req, res) => {
    Collection.find(req.regexQuery)
        .populate("properties")
        .exec()
        .then(collections => {
            res.status(200).json({
                collections,
            })
        })
        .catch(() => {
            res.status(500).json({
                messages: [
                    {
                        type: "error",
                        message: "Error fetching property types",
                        description: "Unknown error fetching all property types",
                    },
                ],
            })
        })
}
