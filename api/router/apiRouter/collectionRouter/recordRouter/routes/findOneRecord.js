const getModel = require("../helpers/getModel")

module.exports = (req, res) => {
    return new Promise(resolve => {
        const model = getModel(req.Collection)
        resolve(model.findOne({ _id: req.params.id }).exec())
    })
        .then(record => {
            res.status(200).json({
                [req.Collection._collectionName]: record,
            })
        })
        .catch(() => {
            res.status(500).json({
                messages: [
                    {
                        type: "error",
                        message: "Error fetching the record",
                        description: "The server was unable to fetch the record",
                    },
                ],
            })
        })
}
