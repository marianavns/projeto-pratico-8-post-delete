// APP:
// 01 - ONDE IMPORTAMOS AS ROTAS (conexões entre requisições/respostas e endereço digitado no cliente);
// 02 - E MOSTRAMOS QUAL SINAL DO CLIENTE FARÁ A APLICAÇÃO ENTRAR EM DETERMINADA ROTA, SE COMUNICANDO COM O SERVIDOR.

// 01 - Importando todas as rotas
const routes = require('./router/bookshopRouter')

    // Importando os módulos necessários:
        const express = require('express')
        const app = express()  

// 02 - Mostrando qual sinal do cliente fará a aplicação entrar em determinada rota, se comunicando com o servidor.
app.use ('/', routes)

// ?????? Porque está aqui??
app.use(express.json())

module.exports = app    