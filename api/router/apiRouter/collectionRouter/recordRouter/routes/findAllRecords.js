const getModel = require("../helpers/getModel")

module.exports = (req, res) => {
    return new Promise(resolve => {
        console.log("halla baola")
        const model = getModel(req.Collection)
        resolve(model.find(req.regexQuery).exec())
    })
        .then(records => {
            res.status(200).json({
                [req.Collection._collectionName]: records,
            })
        })
        .catch(() => {
            res.status(500).json({
                messages: [
                    {
                        type: "error",
                        message: "Error fetching records",
                        description: "Unknown error fetching all records",
                    },
                ],
            })
        })
}
