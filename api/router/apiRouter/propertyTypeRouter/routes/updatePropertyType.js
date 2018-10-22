const PropType = require("../../../../db/models/propertyType")

module.exports = (req, res) => {
    PropType.findOneAndUpdate({ _id: req.params.id }, { $set: { ...req.body } }, { new: true })
        .exec()
        .then(propType => {
            res.status(200).json({
                propType,
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
