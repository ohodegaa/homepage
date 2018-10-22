const throwError = require("../../../../../utils/throwError")
const getModel = require("../helpers/getModel")

module.exports = (req, res) => {
    return new Promise(resolve => {
        const model = getModel(req.Collection)
        model.findOneAndDelete({ _id: req.params.id })
    })

        .then(delRes => {
            if (delRes.n <= 0) {
                throwError(404, "No prop type was found with id " + req.params.id)
            } else {
                res.sendStatus(200)
            }
        })
        .catch(err => {
            res.status(err.status || 404).json({
                messages: [
                    {
                        type: "error",
                        message: "Error deleting the property type",
                        description: err.description || "Unknown error deleting new property type",
                    },
                ],
            })
        })
}
