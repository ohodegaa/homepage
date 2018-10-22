const Property = require("../../../../db/models/property").model

module.exports = (req, res) => {
    Property.findOneAndUpdate({ _id: req.params.id }, { $set: { ...req.body } }, { new: true })
        .exec()
        .then(property => {
            res.status(200).json({
                property,
            })
        })
        .catch(() => {
            res.status(500).json({
                messages: [
                    {
                        type: "error",
                        message: "Error updating the property",
                        description: "The server was unable to update property with id " + req.params.id,
                    },
                ],
            })
        })
}
