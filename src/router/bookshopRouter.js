
// ROUTER: 
// 01. ONDE CRIAMOS ROTAS, RELACIONANDO AS REQUISIÇÕES E RESPOSTAS COM ENDEREÇOS DIGITADOS NO CLIENTE.

// Importando o arquivo com as requisições e respostas (controller):
    const controller = require('../controller/bookshopController')

    // Importando os módulos necessários:
        const express = require('express')
        const router = express.Router()

// 01. Relacionando as requisições e respostas com os endereços digitados no cliente:
    router.get('/livros', controller.getAllBooks)
    router.get('/colaboradores', controller.getAllCollaborators)
    // router.get('/livros/:genre', controller.getBookByGenre)
    router.get('/idadedocolaborador/:id', controller.getAgeByID)

    router.post('/adicionarlivro', controller.postBook)
    router.post('/adicionarcolaborador', controller.postCollaborator)

    router.delete('/excluirlivro/:id', controller.deleteBook) 
    router.delete('/excluircolaborador/:id', controller.deleteCollaborator)
    
    router.put('/putlivro/:id', controller.putBook)
    

module.exports = router