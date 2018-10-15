const PropType = require("../../../../db/models/propType")

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
                error: {
                    message: "Error fetching the prop type",
                    description: "The server was unable to fetch prop type with id " + req.params.id,
                },
            })
        })
}
