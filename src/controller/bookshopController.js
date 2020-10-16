const fs = require('fs')

const books = require( '../model/books.json' )
const collaborators = require( '../model/collaborators.json' )

// ==> GET

const getAllBooks = ( req, res ) => {
    res.status(200).send(books)
}

const getAllCollaborators = ( req, res ) => {
    res.status(200).send(collaborators)
}

// const getIDs = (req, res) => {
//     const IDs = []    
//     IDs.push("teste")
//     console.log(IDs)
//     res.status(200).send(IDs)
// }
const getAgeByID = ( req, res ) => {
        const id = req.params.id
        const filtered = collaborators.find((element) => element.id == id)
        const yearBirth = filtered.id.slice(4, -4)  
            const name = filtered.name
            const actualYear = 2020
        const age = actualYear - yearBirth
    res.status(200).send(`A pessoa com o id ${id} se chama ${name} e tem ${age} anos.`)
}

    /* 
    const getBookByGenre = ( req, res ) => {
        res.status(200).send(booksByGenre)
    } 
    */

// ==> POST

const postBook = ( req, res ) => {
    const {isbn, id, name, authorship, publishingCompany, release, genre} = req.body
    books.push({isbn, id, name, authorship, publishingCompany, release, genre})
        fs.writeFile('./src/model/books.json', JSON.stringify(books), 'utf8', function(err){
            if (err) {
                return res.status(424).send({message: err})
            }
    console.log("O arquivo foi atualizado!")
            })    
    res.status(201).send(books)
}

const postCollaborator = ( req, res ) => {
    const {name, id, sector, occupation, workschedule, inTraining} = req.body
    collaborators.push({name, id, sector, occupation, workschedule, inTraining})
        fs.writeFile('./src/model/collaborators.json', JSON.stringify(collaborators), 'utf-8', function(err){
            if (err) {
                return res.status(424).send({message: err})
            }
    console.log("O arquivo foi atualizado!")
            })    
    res.status(201).send(collaborators)
}

// ==> DELETE

const deleteBook = ( req, res ) => {
    const id = req.params.id
    const filteredBook = books.find((element) => element.id == id)
    const index = books.indexOf(filteredBook)
    books.splice(index, 1)
        fs.writeFile('./src/model/books.json', JSON.stringify(books), 'utf-8', function(err){
            if (err) {
            return res.status(424).send({message: err})
            }
            console.log("O arquivo foi atualizado!")
        })
res.status(200).send(books)
}

const deleteCollaborator = ( req, res ) => {
    const id = req.params.id
    const filtered = collaborators.find((element) => element.id == id)
    const indexFiltered = collaborators.indexOf(filtered)
    collaborators.splice(indexFiltered, 1)
        fs.writeFile('./src/model/collaborators.json', JSON.stringify(collaborators), 'utf8', function(err){
            if (err) {
                return res.status(424).send({message: err})
            }
            console.log("O arquivo foi atualizado.")
        })
res.status(200).send(collaborators)
}

// ==> PUT

const putBook = (req, res) => {

    const id = req.params.id
    const bookUpdated = req.body
        
    try {
        const bookToUpdate = books.find(element => element.id == id)
        const index = books.indexOf(bookToUpdate)

        books.splice(index, 1, bookUpdated)

        fs.writeFile("./src/model/books.json", JSON.stringify(books), "utf-8", function (err) {
            if (err) { return res.status(424).send( {message: 'err1'} ) }
        console.log(`O arquivo com o ID ${id} foi atualizado com sucesso.`)
        })

    res.status(200).send(books)
    }
        catch (err) {
            return res.status(424).send({ message: 'O arquivo não pôde ser processado.' })
        }
}

// ==> PATCH

const patchBook = (req, res) => {

    const genre = req.params.genre
    const updateBook = req.body
    
    try {
        const bookToUpdate =  books.find(element => element.genre == genre)

        Object.keys(updateBook).forEach(key => {
            bookToUpdate[key] = updateBook[key]
        })
        console.log(bookToUpdate)

        fs. writeFile("./src/model/books.json", JSON.stringify(books), "utf8", function(err){
            if (err) {
                return res.status(424).send({ message: "err1" }) }
        console.log(`Os registros que contem ${genre} foram atualizados.`)
        })
    
    return res.status(200).send(books)
    } catch (err) {
        return res.status(424).send({ message: `Não foi possível atualizar a chave` })
      }
}




module.exports = { 
    getAllBooks,
    getAllCollaborators,
    // getBookByGenre,
    getIDs,
    getAgeByID,
    
    postBook,
    postCollaborator,

    deleteBook,  
    deleteCollaborator,

    putBook,
    // putCollaborator,

    patchBook,
    // patchBook
}