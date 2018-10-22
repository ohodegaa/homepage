const PropType = require("../../../../db/models/propertyType")
const _ = require("lodash")

module.exports = (req, res) => {
    PropType.find(req.regexQuery)
        .exec()
        .then(propTypes => {
            res.status(200).json({
                propTypes,
            })
        })
        .catch(() => {
            res.status(500).json({
                messages: [
                    {
                        type: "error",
                        message: "Error fetching property types",
                        description: "Unknown error fetching all property types",
                    },
                ],
            })
        })
}
