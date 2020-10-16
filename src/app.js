const express = require('express')
const app = express()  
app.use(express.json())

const routes = require('./router/bookshopRouter')
app.use ('/', routes)

module.exports = app 
   

  

