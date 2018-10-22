const getModel = require("../helpers/getModel")

module.exports = (req, res) => {
    return new Promise(resolve => {
        const Model = getModel(req.Collection)

        const record = new Model({ ...req.body })
        resolve(record.save())
    })
        .then(savedRecord => {
            res.status(200).json({
                data: { ...savedRecord },
            })
        })
        .catch(err => {
            return res.status(err.status || 500).json({
                messages: [
                    {
                        type: "error",
                        message: "Error creating new property type",
                        description: err.description || "Unknown error adding new property type",
                    },
                ],
            })
        })
}
