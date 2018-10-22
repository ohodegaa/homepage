const mongoose = require("mongoose")

const propertyTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    validators: [String],
    __v: {
        type: Number,
        select: false,
    },
})

module.exports = mongoose.model("PropertyType", propertyTypeSchema)
