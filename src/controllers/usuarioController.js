var usuarioModel = require("../models/usuarioModel");

function senhaForte(senha) {
    var maiuscula = false;
    var minuscula = false;
    var numero = false;
    var simbolo = false;
    var simbolos = "!@#$%&*()-_+=?.,;:/<>[]{}|~^`'\"";

    for (var i = 0; i < senha.length; i++) {
        var letra = senha[i];

        if (letra >= "A" && letra <= "Z") {
            maiuscula = true;
        } else if (letra >= "a" && letra <= "z") {
            minuscula = true;
        } else if (letra >= "0" && letra <= "9") {
            numero = true;
        } else if (simbolos.indexOf(letra) >= 0) {
            simbolo = true;
        }
    }

    var erros = "";
    if (senha.length < 8) erros += "8 caracteres ou mais; ";
    if (maiuscula == false) erros += "uma letra maiúscula; ";
    if (minuscula == false) erros += "uma letra minúscula; ";
    if (numero == false) erros += "um número; ";
    if (simbolo == false) erros += "um símbolo; ";

    return erros;
}

function erroBanco(erro) {
    console.log("MySQL:", erro.code, erro.message);

    if (erro.code == "ECONNREFUSED" || erro.code == "ETIMEDOUT") {
        return "MySQL local desligado ou porta incorreta. Confira o servico MySQL e a porta " + process.env.DB_PORT + ".";
    } else if (erro.code == "ER_ACCESS_DENIED_ERROR" || erro.code == "ER_DBACCESS_DENIED_ERROR") {
        return "Usuario ou senha do MySQL incorretos. Execute o script SQL atualizado.";
    } else if (erro.code == "ER_BAD_DB_ERROR" || erro.code == "ER_NO_SUCH_TABLE" || erro.code == "ER_BAD_FIELD_ERROR") {
        return "Banco ou tabelas incorretos. Execute o script SQL atualizado por inteiro.";
    } else {
        return "Erro no banco de dados. Confira a mensagem no terminal do Node.";
    }
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    if (typeof nome != "string" || typeof email != "string" || typeof senha != "string" || nome.trim() == "" || nome.length > 80 || email.length > 160 || senha.length > 128 || email.indexOf("@") < 1 || email.lastIndexOf(".") <= email.indexOf("@") + 1 || email.indexOf(" ") >= 0 || email[email.length - 1] == "." || senhaForte(senha) != "") {
        res.status(400).send("Preencha os campos corretamente.");
    } else {
        usuarioModel.cadastrar(nome, email, senha).then(function (resultado) {
            res.status(201).json(resultado);
        }).catch(function (erro) {
            if (erro.code == "ER_DUP_ENTRY") {
                res.status(409).send("E-mail já cadastrado.");
            } else {
                res.status(500).send(erroBanco(erro));
            }
        });
    }
}

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    if (email == undefined || senha == undefined || email == "" || senha == "") {
        res.status(400).send("Preencha os campos.");
    } else {
        usuarioModel.autenticar(email, senha).then(function (resultado) {
            if (resultado.length == 1) {
                res.json(resultado[0]);
            } else {
                res.status(403).send("E-mail ou senha inválidos.");
            }
        }).catch(function (erro) {
            res.status(500).send(erroBanco(erro));
        });
    }
}

module.exports = { cadastrar, autenticar };
