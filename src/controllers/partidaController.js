var partidaModel = require("../models/partidaModel");

function salvarQuiz(req, res) {
    var dados = req.body;
    var tipo = "";
    if (dados.idPergunta >= 301 && dados.idPergunta <= 312) tipo = "realidade";
    if (dados.idPergunta >= 401 && dados.idPergunta <= 412) tipo = "ficcao";
    if (tipo == "" || (dados.escolha != "realidade" && dados.escolha != "ficcao") || !dados.jogador || !dados.id) {
        res.status(400).send("Resposta inválida.");
    } else {
        partidaModel.salvarRespostas(dados.jogador, dados.id, dados.idPergunta, tipo, dados.escolha).then(function (resultado) {
            res.json(resultado);
        }).catch(function () {
            res.status(500).send("Não foi possível salvar a resposta.");
        });
    }
}

function salvarSenha(req, res) {
    var dados = req.body;
    if (!dados.jogador || !dados.id || dados.nivel < 1 || dados.nivel > 15 || dados.tempoSegundos < 0) {
        res.status(400).send("Resultado inválido.");
    } else {
        partidaModel.salvarSenhas(dados.jogador, dados.id, dados.nivel, dados.tempoSegundos, dados.completo).then(function (resultado) {
            res.json(resultado);
        }).catch(function () {
            res.status(500).send("Não foi possível salvar o desafio.");
        });
    }
}

function dashboard(req, res) {
    var jogador = req.params.idUsuario;
    partidaModel.listarQuiz(jogador).then(function (quiz) {
        partidaModel.listarSenhas(jogador).then(function (senhas) {
            res.json({ quiz: quiz, senhas: senhas });
        }).catch(function () {
            res.status(500).send("Não foi possível consultar as senhas.");
        });
    }).catch(function () {
        res.status(500).send("Não foi possível consultar o quiz.");
    });
}

module.exports = { salvarQuiz, salvarSenha, dashboard };
