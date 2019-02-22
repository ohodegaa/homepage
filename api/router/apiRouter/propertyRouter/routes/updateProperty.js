const Property = require("../../../../db/models/property").model
const _ = require("lodash")

module.exports = (req, res) => {
    let updated = { ...req.body }
    if (updated.name) {
        updated["key"] = _.camelCase(updated.name)
    }
    Property.findOneAndUpdate({ _id: req.params.id }, { $set: { ...updated } }, { new: true })
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
