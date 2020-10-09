const books = require( '../model/books.json' )
const collaborators = require( '../model/collaborators.json' )

const fs = require('fs')

const getAllBooks = ( req, res ) => {
    res.status(200).send(books)
}

const postBook = ( req, res ) => {
    const {id, isbn, name, authorship, publishingCompany, release, genre} = req.body
    books.push({id, isbn, name, authorship, publishingCompany, release, genre})
    fs.writeFile('./src/model/books.json', JSON.stringify(books), 'utf8', function(err){
       if (err) {
         return res.status(424).send({message: err});
       }
        console.log("O arquivo foi atualizado.")
    })    
    res.status(200).send(books)
}

const deleteBook = ( req, res ) => {
    const id = req.param.id
    const filteredBook = books.filter((array) => array.id == id)
    const indexFilteredBook = books.indexOf(filteredBook)
    books.splice(indexFilteredBook)
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

// const postCollaborator = ( req, res ) => {
//     res.status(200).send(collaboratorNewList)
// }

// const deleteCollaborator = ( req, res ) => {
//     res.status(200).send(collaborators)
// }

/////////////////

// const getBookByGenre = ( req, res ) => {
//     res.status(200).send(booksByGenre)
// }

const getAgeByID = ( req, res ) => {
    const actualYear = 2020
        const id = req.params.id
        const filtered = collaborators.find((param) => param.id == id)
        const name = filtered.name
        const yearBirth = filtered.id.slice(4, -4)
    const age = actualYear - yearBirth
res.status(200).send(`A pessoa com o id ${id} se chama ${name} e tem ${age} anos.`)
}

module.exports = { 
    getAllBooks,
    postBook, 
    deleteBook, 
    getAllCollaborators,
    // postCollaborator,
    // deleteCollaborator,
    // getBookByGenre,
    getAgeByID
}