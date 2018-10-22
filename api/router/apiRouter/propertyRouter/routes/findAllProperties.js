const Property = require("../../../../db/models/property").model
const _ = require("lodash")

module.exports = (req, res) => {
    Property.find(req.regexQuery)
        .exec()
        .then(properties => {
            res.status(200).json({
                properties,
            })
        })
        .catch(() => {
            res.status(500).json({
                messages: [
                    {
                        type: "error",
                        message: "Error fetching properties",
                        description: "Unknown error fetching all properties",
                    },
                ],
            })
        })
}
