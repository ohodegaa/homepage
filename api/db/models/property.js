const mongoose = require("mongoose")

const propertySchema = mongoose.Schema({
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
    __v: {
        type: Number,
        select: false,
    },
})

propertySchema.post("findOneAndRemove", property => {
    console.log("//TODO: Should delete properties in all collections here")
    //console.log(property)
})

module.exports = {
    model: mongoose.model("Property", propertySchema),
    schema: propertySchema,
}
