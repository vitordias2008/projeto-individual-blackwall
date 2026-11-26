var database = require("../database/config");

async function cadastrar(nome, email, senha) {
    var conexao = await database.conectar();

    try {
        await conexao.beginTransaction();

        var resultado = await conexao.query(
            "INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)",
            [nome, email, senha]
        );

        await conexao.query(
            "INSERT INTO perfil (fkUsuario) VALUES (?)",
            [resultado[0].insertId]
        );

        await conexao.commit();
        return resultado[0];
    } catch (erro) {
        await conexao.rollback();
        throw erro;
    } finally {
        await conexao.end();
    }
}

function autenticar(email, senha) {
    var instrucao = "SELECT usuario.id, usuario.nome, usuario.email, perfil.apelido FROM usuario LEFT JOIN perfil ON perfil.fkUsuario = usuario.id WHERE usuario.email = ? AND BINARY usuario.senha = ?";
    return database.executar(instrucao, [email, senha]);
}

module.exports = { cadastrar, autenticar };
