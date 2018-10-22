const mongoose = require("mongoose")

const collectionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    properties: {
        type: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "Property",
            },
        ],
    },
    _collectionName: {
        type: String,
        required: true,
    },
    _modelName: {
        type: String,
        required: true,
    },
    __v: {
        type: Number,
        select: false,
    },
})

module.exports = {
    model: mongoose.model("Collection", collectionSchema),
    schema: collectionSchema,
}
