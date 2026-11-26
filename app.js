var path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env.dev"), override: true });

var express = require("express");
var cors = require("cors");
var database = require("./src/database/config");
var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var partidasRouter = require("./src/routes/partidas");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/chartjs", express.static(path.join(__dirname, "node_modules", "chart.js", "dist")));
app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/partidas", partidasRouter);

var porta = Number(process.env.APP_PORT) || 3333;
var host = process.env.APP_HOST || "127.0.0.1";

var servidor = app.listen(porta, host, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${host}:${porta} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
`);
    database.executar("SELECT id FROM usuario LIMIT 1").then(function () {
        return database.executar("SELECT fkUsuario FROM perfil LIMIT 1");
    }).then(function () {
        console.log("MySQL local conectado. Cadastro disponivel.");
    }).catch(function (erro) {
        console.log("MySQL local: " + erro.code + " - " + erro.message);
        console.log("Banco: " + process.env.DB_DATABASE + " | Porta: " + process.env.DB_PORT);
        console.log("Confira o servico MySQL e execute src/database/script-tabelas.sql no Workbench.");
    });
});

servidor.on("error", function (erro) {
    console.error("Não foi possível iniciar o servidor: " + erro.code);
    if (erro.code == "EADDRINUSE") {
        console.error("A porta " + porta + " já está em uso. Encerre o outro servidor e tente novamente.");
    }
    process.exitCode = 1;
});
