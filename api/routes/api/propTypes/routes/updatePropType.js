const PropType = require("../../../../db/models/propType")

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
                error: {
                    message: "Error updating the prop type",
                    description: "The server was unable to update prop type with id " + req.params.id,
                },
            })
        })
}
