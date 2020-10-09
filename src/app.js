const routes = require('./router/bookshopRouter')
const express = require('express')
const app = express()

app.use(express.json())

app.use ('/', routes)

// As configuraçoes do projeto ficam aqui
app.use(express.json())

module.exports = app    

// é uma garantia de segurança da aplicacao
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     )
//     next()
//   })
  

