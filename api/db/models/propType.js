const mongoose = require("mongoose")

const propTypeSchema = mongoose.Schema({
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

module.exports = mongoose.model("PropType", propTypeSchema)
