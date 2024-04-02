const fs = require("fs")

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("livros.json") )
}

function getLivroById(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novalistaDeLivro = [ ...livros, livroNovo ]
    fs.writeFileSync("livros.json", JSON.stringify(novalistaDeLivro))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
     const indiceModificado = livrosAtuais.findIndex( livro => livro.id === id )

     const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }
     livrosAtuais[indiceModificado] = conteudoMudado

     fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
    }

    function deletarLivro(id) {
        const livros = JSON.parse(fs.readFileSync("livros.json"))

        const livroFiltrado = livros.filter( livro => livro.id !== id )
        fs.writeFileSync("livros.json", JSON.stringify(livroFiltrado))
    }

module.exports = {
    getTodosLivros,
    getLivroById,
    insereLivro,
    modificaLivro,
    deletarLivro
}