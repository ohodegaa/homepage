const Property = require("../../../../db/models/property").model
const throwError = require("../../../../utils/throwError")

module.exports = (req, res) => {
    Property.findOneAndRemove({ _id: req.params.id })
        .exec()
        .then(deletedProperty => {
            if (!deletedProperty) {
                throwError(404, "No property found with id " + req.params.id)
            } else {
                res.status(200).json({
                    messages: [
                        {
                            type: "success",
                            message: "Property deleted successfully",
                            description: "Property '" + deletedProperty.name + "' was successfully deleted",
                        },
                    ],
                })
            }
        })
        .catch(err => {
            res.status(err.status || 404).json({
                messages: [
                    {
                        type: "error",
                        message: "Error deleting the property",
                        description: err.description || "Unknown error deleting new property",
                    },
                ],
            })
        })
}
