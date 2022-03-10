const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan("dev"))

const User = require("./routes/index")

app.use('/api', User)

module.exports = app