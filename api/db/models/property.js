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
    reference: {
        type: String,
        required: () => this.propertyType === "mongoId",
    },
    // Automatically created (camel-case from name)
    key: {
        type: String,
        required: true,
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
