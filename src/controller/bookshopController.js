
/* 
O CONTROLLER É ONDE:
1. CHAMAMOS A BASE DE DADOS;
2. CRIAMOS CONSTANTES PARA DAR UMA RESPOSTA DE ACORDO COM A REQUISIÇÃO, ATRAVÉS DOS SEGUINTES PASSOS:
    2.1. PEGAMOS AS INFORMAÇÕES DA REQUISIÇÃO NO CLIENTE;
    2.2. TRABALHAMOS AS INFORMAÇÕES QUE VIERAM NA REQUISIÇÃO;
    2.3. DEVOLVEMOS O QUE A USUÁRIA QUER.
*/

/* 0. Importando os módulos necessários: */
    const fs = require('fs')

/* 1. CHAMAMOS A BASE DE DADOS: */
    const books = require( '../model/books.json' )
    const collaborators = require( '../model/collaborators.json' )


/* 2. CRIAMOS CONSTANTES PARA DAR UMA RESPOSTA DE ACORDO COM A REQUISIÇÃO, ATRAVÉS DOS SEGUINTES PASSOS:*/

// =========>     PASSOS PARA O MÉTODO GET     <=========

    const getAllBooks = ( req, res ) => {
        // 2.1: Pegamos as informações da requisição: Não há informações específicas
        // 2.2: Trabalhamos as informações da requisição: Não há informações específicas
        // 2.3: Respondemos o que a usuária quer
        res.status(200).send(books)
    }

    const getAllCollaborators = ( req, res ) => {
        res.status(200).send(collaborators)
    }

    // const getBookByGenre = ( req, res ) => {}

    const getAgeByID = ( req, res ) => {

        // 2.1: Pegamos as informações da requisição (GET - informações no browser):
        const id = req.params.id

        // 2.2: Trabalhamos as informações que vieram das requisições:
        const filtered = collaborators.find((element) => element.id == id)
        const yearBirth = filtered.id.slice(4, -4)
        
        const name = filtered.name
        const actualYear = 2020
        const age = actualYear - yearBirth

        // 2.3: Devolvemos o que a usuária quer: 
        res.status(200).send(`A pessoa com o id ${id} se chama ${name} e tem ${age} anos.`)
    }


// =========>     PASSOS PARA O MÉTODO POST     <=========


    const postBook = ( req, res ) => {

        // 2.1: Pegamos as informações da requisição (POST - informações no body):
        const {id, isbn, name, authorship, publishingCompany, release, genre} = req.body

        // 2.2: Trabalhamos as informações que vieram das requisições:
            // -empurrando as informações para o banco de dados
            books.push({id, isbn, name, authorship, publishingCompany, release, genre})
            // -reencrevendo o banco de dados com o elemento novo
            fs.writeFile('./src/model/books.json', JSON.stringify(books), 'utf8', function(err){
                if (err) {return res.status(424).send( {message: err} )}
            })

        // 2.3: Devolvemos o que a usuária quer
        res.status(200).send(books)
    }


    const postCollaborator = ( req, res ) => {

        // 2.1: Pegamos as informações da requisição (POST - informações no body):
        const {name, id, sector, occupation, workschedule, inTraining} = req.body

        // 2.2: Trabalhamos as informações que vieram das requisições:
        collaborators.push({name, id, sector, occupation, workschedule, inTraining})
            fs.writeFile('./src/model/collaborators.json', JSON.stringify(collaborators), 'utf-8', function(err){
                if (err) {return res.status(424).send( {message: err} )}
            })
        
        // 2.3: Devolvemos o que a usuária quer
        res.status(201).send(collaborators)
    }


// =========>     PASSOS PARA O MÉTODO DELETE     <=========

    const deleteBook = ( req, res ) => {

        // 2.1: Pegamos as informações da requisição (DELETE - Informações no browser):
        const id = req.params.id
        
        // 2.2: Trabalhamos as informações que vieram das requisições:
        // -buscando o elemento que possui a informação digitada no browser:
            const filteredBook = books.filter((element) => element.id == id)
            const indexFilteredBook = books.indexOf(filteredBook)
        // -tirando este elemento:
            books.splice(indexFilteredBook)
        // -reescrevendo o banco de dados com a atualização:
            fs.writeFile('./src/model/books.json', JSON.stringify(books), 'utf8', function(err){
                if (err) {return res.status(424).send( {message: err} )}
            })

        // 2.3: Devolvemos o que a usuária quer
        res.status(200).send(books)
    }
    
    const deleteCollaborator = ( req, res ) => {
        const id = req.params.id
        const filtered = collaborators.filter((element) => element.id == id)
        const indexFiltered = collaborators.indexOf(filtered)
        collaborators.splice(indexFiltered, 1)
            fs.writeFile('./src/model/collaborators.json', JSON.stringify(collaborators), 'utf8', function(err){
                if (err) {return res.status(424).send( {message: err} )}
            })
    res.status(200).send(collaborators)
    }


// =========>     PASSOS PARA O MÉTODO PUT     <=========

const putBook = (req, res) => {

    // 2.1: Pegamos as informações da requisição (PUT - Informações no browser e no body):
    const id = req.params.id;
    const bookUpdated = req.body
        
    // 2.2: Trabalhamos as informações que vieram das requisições:
    // (fazemos a verificação ADICIONAL de erro. o programa funciona normalmente sem o try e o catch abaixo.)
    try {
        // -buscando o objeto que possui a informação digitada no browser
        const bookToUpdate = books.find((element) => element.id == id)

        // -tirando este elemento e colocando o elemento novo   
        const index = books.indexOf(bookToUpdate)
        books.splice(index, 1, bookUpdated)

        // -reescrevendo o banco de dados com a atualização:  
        fs.writeFile("./src/model/books.json", JSON.stringify(books), "utf-8", function (err) {
        if (err) { return res.status(424).send( {message: 'err1'} ) }
        console.log(`O arquivo com o ID ${id} foi atualizado com sucesso.`)
        })

    // 2.3: Devolvemos o que a usuária quer
    res.status(200).send(books);
    }
        // (verificação adicional de erro. o programa funciona sem o catch e o try acima)
        catch (err) {
            return res.status(424).send({ message: 'O arquivo não pôde ser processado.' })
        }
}

// =========>     PASSOS PARA O MÉTODO PATCH     <=========

const patchBook = (req, res) => {

    // 2.1: Pegamos as informações da requisição (PUT - Informações no browser e no body):
    const genre = req.params.genre;
    const updateKeyValue = req.body;
      
    // 2.2: Trabalhamos as informações que vieram das requisições:
    try {
        // -buscando o(s) objeto(s) que possui(em) a informação digitada no browser
        const bookToUpdate =  books.find((element) => element.genre == genre);
               
        // -editando a chave digitada no body justamente no elemento selecionado pelo browser. Se a chave não existir, ela será adicionada.        
            Object.keys(updateKeyValue).forEach((key) => {
            bookToUpdate[key] = updateKeyValue[key]
          })

          console.log(bookToUpdate)

       
        // -reescrevendo o banco de dados com a atualização: 
        fs. writeFile("./src/model/books.json", JSON.stringify(books), "utf8", function(err){
            if (err) {
                return res.status(424).send({ message: "err1" });        
            }
        console.log(`Os registros que contem ${genre} foram atualizados.`);
        });

    // 2.3: Devolvemos o que a usuária quer
        return res.status(200).send(books);

    } catch (err) {return res.status(424).send({ message: `Não foi possível atualizar a chave` });
      }
}

  

module.exports = { 
    getAllBooks,
    getAllCollaborators,
    // getBookByGenre,
    getAgeByID,

    postBook, 
    postCollaborator,

    deleteBook,
    deleteCollaborator,
    
    putBook,
    // putCollaborator,

    patchBook,
    // patchCollaborator
}