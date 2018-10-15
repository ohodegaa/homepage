const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    propType: {
        type: mongoose.Schema.ObjectId,
        ref: "PropType",
    },
    __v: {
        type: Number,
        select: false,
    },
})

module.exports = mongoose.model("Prop", userSchema)
