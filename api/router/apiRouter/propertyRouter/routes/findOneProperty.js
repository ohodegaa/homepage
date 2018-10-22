const Property = require("../../../../db/models/property").model

module.exports = (req, res) => {
    Property.findOne({ _id: req.params.id })
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
                        message: "Error fetching the property",
                        description: "The server was unable to fetch property with id " + req.params.id,
                    },
                ],
            })
        })
}
