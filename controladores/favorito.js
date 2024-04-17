const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require("../servicos/favorito");

function getFavoritos(req, res) {
  try {
    const livros = getTodosFavoritos();
    res.send(livros);
  } catch (error) {
    res.status(404);
    res.send(error.messagem);
  }
}

function postFavorito(req, res) {
  try {
    const id = req.params.id
    insereFavorito(id);
    res.status(201);
    res.send("Favorito inserido com sucesso!");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteFavorito(req, res) {
    try {
      const id = req.params.id;

      if (id && Number(id)) {
        deletaFavoritoPorId(id);
        res.send("Favorito deletado com sucesso!");
      } else {
        res.status(422);
        res.send("ID Inválido!");
      }
    } catch (error) {
      res.status(500);
      res.send(error.messagem);
    }
  }

module.exports = {
  getFavoritos,
  postFavorito,
  deleteFavorito
};
