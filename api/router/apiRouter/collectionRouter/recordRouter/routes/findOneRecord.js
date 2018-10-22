const PropType = require("../../../../../db/models/propertyType")

module.exports = (req, res) => {
    PropType.findOne({ _id: req.params.id })
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
                        message: "Error fetching the property type",
                        description: "The server was unable to fetch property type with id " + req.params.id,
                    },
                ],
            })
        })
}
