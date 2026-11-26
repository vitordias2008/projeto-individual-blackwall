var database = require("../database/config");

function salvarRespostas(jogador, partida, pergunta, tipo, escolha) {
    var instrucao = "INSERT INTO resposta (jogador, partida, pergunta, tipo, escolha) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE escolha = VALUES(escolha)";
    return database.executar(instrucao, [jogador, partida, pergunta, tipo, escolha]);
}

function salvarSenhas(jogador, partida, nivel, segundos, completo) {
    var instrucao = "INSERT INTO desafioSenha (jogador, partida, nivel, segundos, completo) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE nivel = VALUES(nivel), segundos = VALUES(segundos), completo = VALUES(completo)";
    return database.executar(instrucao, [jogador, partida, nivel, segundos, completo]);
}

function listarQuiz(jogador) {
    var instrucao = "SELECT partida, tipo, escolha FROM resposta WHERE jogador = ? ORDER BY CAST(partida AS UNSIGNED) ASC";
    return database.executar(instrucao, [jogador]);
}

function listarSenhas(jogador) {
    var instrucao = "SELECT nivel, segundos, completo FROM desafioSenha WHERE jogador = ? ORDER BY CAST(partida AS UNSIGNED) DESC";
    return database.executar(instrucao, [jogador]);
}

module.exports = { salvarRespostas, salvarSenhas, listarQuiz, listarSenhas };
