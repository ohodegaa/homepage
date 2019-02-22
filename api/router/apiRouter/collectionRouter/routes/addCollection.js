const _ = require("lodash")
const Collection = require("../../../../db/models/collection").model
const Property = require("../../../../db/models/property").model
const throwError = require("../../../../utils/throwError")

module.exports = (req, res) => {
    Property.find({ _id: { $in: req.body.properties } })
        .exec()
        .then(properties => {
            if (properties) {
                return Promise.resolve()
            } else {
                throwError(404, "No properties found")
            }
        })
        .then(() => {
            const collection = new Collection({
                name: req.body.name,
                properties: req.body.properties,
                _modelName: _.upperFirst(_.camelCase(req.body.name)),
                _collectionName: _.snakeCase(req.body.name),
            })
            return collection.save()
        })
        .then(collection => {
            res.status(201).json({
                collection,
                messages: [
                    {
                        type: "success",
                        message: "Collection created",
                        description: "Collection " + collection.name + " created successfully",
                    },
                ],
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
