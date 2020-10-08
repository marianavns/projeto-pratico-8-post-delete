
// ROUTER: 
// 01. ONDE CRIAMOS ROTAS, RELACIONANDO AS REQUISIÇÕES E RESPOSTAS COM ENDEREÇOS DIGITADOS NO CLIENTE.

// Importando o arquivo com as requisições e respostas (controller):
    const controller = require('../controller/bookshopController')

    // Importando os módulos necessários:
        const express = require('express')
        const router = express.Router()

// 01. Relacionando as requisições e respostas com os endereços digitados no cliente:
    router.get('/livros', controller.getAllBooks)
    router.post('/adicionarlivro', controller.postBook)
    router.delete('/excluirlivro/:id', controller.deleteBook)

    router.get('/colaboradores', controller.getAllCollaborators)
    router.post('/adicionarcolaborador'), controller.postCollaborator
    router.delete('/colaborador/:id', controller.deleteCollaborator)

    router.get('/livros/:genre', controller.getBookByGenre)
    router.get('/idade/:id', controller.getAgeByID)

module.exports = router