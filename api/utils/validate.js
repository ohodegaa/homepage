module.exports = (validators = [], errorMessage) => {
    validators.push((req, res, next) => {
        req.asyncValidationErrors()
            .then(next)
            .catch(errors => {
                const description = errors.map(err => err.param + ": " + err.msg).join(", ")
                res.status(400).json({
                    error: {
                        message: errorMessage,
                        description,
                    },
                })
            })
    })
    return validators
}
