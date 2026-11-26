var mysql = require("mysql2/promise");

var mySqlConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    connectTimeout: 5000
};

function conectar() {
    return mysql.createConnection(mySqlConfig);
}

async function executar(instrucao, parametros) {
    var conexao = await conectar();
    try {
        var resultado = await conexao.query(instrucao, parametros);
        return resultado[0];
    } finally {
        await conexao.end();
    }
}

module.exports = { executar, conectar };
