const mongoose = require("mongoose")

const excludedFromClient = ["password", "__v"]

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        select: false,
        default: null,
    },
    name: String,
    mail: String,
    phone: String,
    __v: {
        type: Number,
        select: false,
    },
})

// use user.getSafe to exclude parameters when json is returned to client
userSchema.methods.getSafe = function() {
    let obj = this.toObject()
    for (let ex of excludedFromClient) {
        delete obj[ex]
    }
    return obj
}

module.exports = {
    model: mongoose.model("User", userSchema),
    schema: userSchema,
}
