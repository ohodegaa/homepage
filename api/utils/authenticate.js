const jwt = require("jsonwebtoken")
const throwError = require("./throwError")

const getToken = req => {
    return new Promise(resolve => {
        const bearerToken = req.headers["authorization"]
        const token = bearerToken.split(" ")[1]
        if (!token) {
            throwError(401, "No token provided. Please provide a valid jwt token.")
        }
        resolve(token)
    })
}

const authenticate = (req, res, next) => {
    getToken(req, res)
        .then(token => {
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    throwError(401, "Not a valid token. Please provide a valid token")
                }
                req.user = decoded.user
                next()
            })
        })
        .catch(err => {
            res.status(err.status || 500).json({
                error: {
                    message: "Error authenticating the user",
                    description: err.description || err,
                },
            })
        })
}

module.exports = authenticate
