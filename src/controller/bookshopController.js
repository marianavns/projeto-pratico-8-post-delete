
// CONTROLLER:
// 1. ONDE CHAMAMOS A BASE DE DADOS
// 2. ONDE CONFIGURAMOS AS REQUISIÇÕES E RESPOSTAS BASEADAS NO BANCO DE DADOS

// 1. Chamando a base de dados:
    const books = require( '../model/books.json' )
    const collaborators = require( '../model/collaborators.json' )

        // Importando os módulos necessários:
            const fs = require('fs')

// 2. Configurando as requisições e respostas baseadas no banco de dados:
    const getAllBooks = ( req, res ) => {
        res.status(200).send(books)
    }

    const postBook = ( req, res ) => {
// Mostrando o que deve ser levado em consideração na requisição de inclusão vinda da usuária:
            const {id, isbn, name, authorship, publishingCompany, release, genre} = req.body
        ///////////// Verificando se o identificador já existe:
        // Empurrando o novo objeto criado para o JSON inicial:
            books.push({id, isbn, name, authorship, publishingCompany, release, genre})
        // Reencrevendo o banco de dados com a atualização:
            fs.writeFile('./src/model/books.json', JSON.stringify(books), 'utf8', function(err){
            if (err) {
                return res.status(424).send({message: err});
            }
            console.log("O arquivo foi atualizado.")
        })
// Respondendo com o banco de dados atualizado:
    res.status(200).send(books)
    }

    const deleteBook = ( req, res ) => {
// Mostrando o que deve ser levado em consideração na requisição de exclusão vinda da usuária:
            const id = req.param.id
        // Encontrando o livro na const books pelo ID:
            const filteredBook = books.filter((array) => array.id == id)
        // Tirando livro encontrado da array:
            const indexFilteredBook = books.indexOf(filteredBook)
            books.splice(indexFilteredBook)
        // Reencrevendo o banco de dados com a atualização:
            fs.writeFile('./src/model/books.json', JSON.stringify(books), 'utf8', function(err){
                if (err) {
                return res.status(424).send({message: err});
                }
                console.log("O arquivo foi atualizado.")
            })
//Respondendo com o banco de dados atualizado
    res.status(200).send(books)
    }

    const getAllCollaborators = ( req, res ) => {
        res.status(200).send(collaborators)
    }

    const postCollaborator = ( req, res ) => {
        // Pegar o livro que a pessoa escreveu no postman
        // Pegar a lista completa de livros
        // Verificar se o identificador já existe
        // Adicionar o livro no arquivo .json
        // Retornar a lista nova
        res.status(200).send(collaboratorNewList)
    }

    const deleteCollaborator = ( req, res ) => {
        // Encontrar o colaborador na const collaborators
        // Tirá-lo da array
        // Reescrever a array
        res.status(200).send(collaborators)
    }

    const getBookByGenre = ( req, res ) => {
        // Encontrar os livros naquele gênero
        // Guardar os livros numa variável
        res.status(200).send(booksByGenre)
    }

    const getAgeByID = ( req, res ) => {
        const actualYear = 2020
            const id = req.params.id
            const filtered = collaborators.find((param) => param.id == id)
            const name = filtered.name
            const yearBirth = filtered.id.slice(3, -2)
        const age = actualYear - yearBirth
    res.status(200).send(`A pessoa com o id ${id} se chama ${name} e tem ${age} anos.`)
    }

module.exports = { 
    getAllBooks,
    postBook, 
    deleteBook, 
    getAllCollaborators,
    postCollaborator,
    deleteCollaborator,
    getBookByGenre,
    getAgeByID
}