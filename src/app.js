const routes = require('./router/bookstoreRouter')

const express = require('express')
const app = express()

app.use ('/', routes)

module.exports = app