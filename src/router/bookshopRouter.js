
// Onde relacionamos as rotas

const controller = require('../controller/bookshopController')

const express = require('express')

const router = express.Router()


router.get('/livros', controller.getAllBooks)
router.post('/adicionarlivro', controller.postBook)
router.delete('/excluirlivro/:id', controller.deleteBook)

router.get('/colaboradores', controller.getAllCollaborators)
router.post('/adicionarcolaborador'), controller.postCollaborator
router.delete('/colaborador/:id', controller.deleteCollaborator)

router.get('/livros/:genre', controller.getBookByGenre)
router.get('/idade/:id', controller.getAgeByID)

module.exports = router