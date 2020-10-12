// APP:
// 01 - ONDE IMPORTAMOS AS ROTAS (conexões entre requisições/respostas e endereço digitado no cliente);
// 02 - E MOSTRAMOS QUAL SINAL DO CLIENTE FARÁ A APLICAÇÃO ENTRAR EM DETERMINADA ROTA, SE COMUNICANDO COM O SERVIDOR.

// Importando os módulos necessários:
const express = require('express')
const app = express()  
app.use(express.json())

// 01 - Importando todas as rotas
const routes = require('./router/bookshopRouter')

    
// 02 - Mostrando qual sinal do cliente fará a aplicação entrar em determinada rota, se comunicando com o servidor.
app.use ('/', routes)



module.exports = app    