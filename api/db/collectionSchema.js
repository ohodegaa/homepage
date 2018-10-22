const Collection = require("./models/collection").model

const getCollectionSchema = collectionId => {
    Collection.findOne({ _id: collectionId })
        .populate("properties")
        .then(collection => {
            const propertyKeys = Object.keys(collection.properties)
            return collection
        })
}
