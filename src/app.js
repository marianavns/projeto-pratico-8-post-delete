const routes = require('./router/bookshopRouter')

// const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.json())

app.use ('/', routes)


// app.use(bodyParser.urlencoded({
//   extended: false
// }))
module.exports = app    