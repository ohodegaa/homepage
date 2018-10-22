const mongoose = require("mongoose")

const groupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})

module.exports = {
    model: mongoose.model("Group", groupSchema),
    schema: groupSchema,
}
