const Collection = require("../../../../db/models/collection").model
const Property = require("../../../../db/models/property").model
const throwError = require("../../../../utils/throwError")

module.exports = (req, res) => {
    Property.find({ _id: { $in: req.body.properties } })
        .exec()
        .then(properties => {
            if (properties.length !== req.body.properties.length) {
                let notFound = req.body.properties.filter(prop => !properties.map(p => p._id.toString()).includes(prop))
                throwError(400, "The following property ids were not found: " + notFound.join(","))
            }
            return Collection.findOneAndUpdate({ _id: req.params.id }, { $set: { ...req.body } }, { new: true })
                .populate("properties")
                .exec()
        })

        .then(collection => {
            res.status(200).json({
                collection,
                messages: [
                    {
                        type: "success",
                        message: "Collection updated",
                        description: "Collection " + collection.name + " updated successfully",
                    },
                ],
            })
        })
        .catch(err => {
            console.log(err)
            res.status(err.status || 500).json({
                messages: [
                    {
                        type: "error",
                        message: "Error updating collection with id " + req.params.id,
                        description: err.description || "An unknown error occured updating the collection",
                    },
                ],
            })
        })
}
