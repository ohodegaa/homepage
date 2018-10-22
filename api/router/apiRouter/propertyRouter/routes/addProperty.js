const Property = require("../../../../db/models/property").model
const throwError = require("../../../../utils/throwError")
const _ = require("lodash")

module.exports = (req, res) => {
    Property.findOne({ name: req.body.name })
        .exec()
        .then(propType => {
            if (!propType) {
                return Promise.resolve()
            } else {
                throwError(400, "A property has already been registered with that name")
            }
        })
        .then(() => {
            const property = new Property({
                name: req.body.name,
                description: req.body.description,
                propertyType: req.body.propertyType,
                isArray: req.body.isArray,
                key: _.camelCase(req.body.name),
            })
            return property.save()
        })
        .then(property => {
            res.status(201).json({
                property,
            })
        })
        .catch(err => {
            return res.status(err.status || 500).json({
                messages: [
                    {
                        type: "error",
                        message: "Error creating new property type",
                        description: err.description || "Unknown error adding new property type",
                    },
                ],
            })
        })
}
