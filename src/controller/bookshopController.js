
// Onde chamamos todos os modelos e criamos os resultados para todos os métodos

// Importando os arquivos necessários
const books = require( '../model/books.json' )
const collaborators = require( '../model/collaborators.json' )

// Importando os módulos necessários
const fs = require('fs')

// Configurando os métodos
const getAllBooks = ( req, res ) => {
    res.status(200).send(books)
}

const postBook = ( req, res ) => {
    // Pegar o objeto criado pela usuária no Postman
    const {id, isbn, name, authorship, publishingCompany, release, genre} = req.body
    ///////////// Verificar se o identificador já existe
    // Empurrar o novo objeto criado para o JSON inicial
    books.push({id, isbn, name, authorship, publishingCompany, release, genre})
    // Modular o arquivo novo
    fs.writeFile('./src/model/books.json', JSON.stringify(books), 'utf8', function(err){
       if (err) {
         return res.status(424).send({message: err});
       }
        console.log("O arquivo foi atualizado.")
    })
    // Retornar a lista nova
    res.status(200).send(books)
};

const deleteBook = ( req, res ) => {
        // Pegar o ID do livro que a usuária quer deletar
        const id = req.param.id
        // Encontrar o livro na const books pelo ID
        const filteredBook = books.filter((array) => array.id == id)
        // Tirá-lo da array
        const indexFilteredBook = books.indexOf(filteredBook)
        books.splice(indexFilteredBook)
        // Modular o arquivo novo
        fs.writeFile('./src/model/books.json', JSON.stringify(books), 'utf8', function(err){
            if (err) {
            return res.status(424).send({message: err});
            }
            console.log("O arquivo foi atualizado.")
        })
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