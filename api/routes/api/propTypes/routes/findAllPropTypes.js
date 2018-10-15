const PropType = require("../../../../db/models/propType")

module.exports = (req, res) => {
    PropType.find()
        .exec()
        .then(propTypes => {
            res.status(200).json({
                propTypes,
            })
        })
        .catch(() => {
            res.status(500).json({
                error: {
                    message: "Error fetching prop types",
                    description: "The server was unable to fetch all prop types from database",
                },
            })
        })
}
