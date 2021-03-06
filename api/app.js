const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const expressValidator = require("express-validator")
const cors = require("cors")
const _ = require("lodash")
require("./db")

const mongoose = require("mongoose")

const apiRouter = require("./router/apiRouter")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(expressValidator())

// for preventing CORS errors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-User")
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE")
        return res.status(200).json({})
    }
    next()
})

app.use((req, res, next) => {
    const { query } = req
    req.regexQuery = !_.isEmpty(query)
        ? {
              $or: Object.keys(query).map(key => ({
                  [key]: {
                      $regex: [query[key]],
                      $options: "i",
                  },
              })),
          }
        : {}
    next()
})

app.use("/api", apiRouter)

// not found error (404)
app.use((req, res, next) => {
    const error = new Error("Not found")
    error.status = 404
    next(error)
})

// handles all errors in our apiRouter
app.use((err, req, res) => {
    res.status(err.status || 500)
    console.log(err)
    res.json({
        errorFinal: {
            message: err.message,
        },
    })
})

module.exports = app
