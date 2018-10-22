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
            const referenceProperty = new Property({
                name: "Reference to collection " + collection.name,
                description: "Refer to a record in the " + collection.name + "-collection",
                propertyType: "mongoId",

            })
            res.status(201).json({
                collection,
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

name: {
    type: String,
        required: true,
},
description: {
    type: String,
},
propertyType: {
    type: String,
default: "string",
},
key: {
    type: String,
        required: true
},
isArray: {
    type: Boolean,
default: false,
},