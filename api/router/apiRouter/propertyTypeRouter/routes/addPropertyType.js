const PropType = require("../../../../db/models/propertyType")
const throwError = require("../../../../utils/throwError")

module.exports = (req, res) => {
    PropType.findOne({ name: req.body.name })
        .exec()
        .then(propType => {
            if (!propType) {
                return Promise.resolve()
            } else {
                throwError(400, "A prop type has already been registered with that name")
            }
        })
        .then(() => {
            const propType = new PropType({
                name: req.body.name,
                validators: req.body.validators,
            })
            return propType.save()
        })
        .then(propType => {
            res.status(201).json({
                propType,
            })
        })
        .catch(err => {
            return res.status(err.status || 500).json({
                messages: [
                    {
                        type: "error",
                        message: "Error creating new property type",
                        description: err.description || "Unknown error adding new property type",
                    },
                ],
            })
        })
}
