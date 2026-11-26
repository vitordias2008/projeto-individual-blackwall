var regrasSenha = [
    "Ter pelo menos 8 caracteres",
    "Ter uma letra maiúscula",
    "Ter uma letra minúscula",
    "Ter um número",
    "Ter um símbolo (!, @, #, $ ou ?)",
    "Ter pelo menos 12 caracteres",
    "Ter pelo menos 3 números",
    "Ter pelo menos 3 letras minúsculas",
    "Não ter espaços",
    "Ter pelo menos 2 letras maiúsculas",
    "Ter um número par",
    "Ter um número ímpar",
    "Ter pelo menos 16 caracteres",
    "Ter pelo menos 4 números",
    "Terminar com ?"
];
var nivel = 1;
var inicio = 0;
var segundos = 0;
var relogio;
var idPartida = Date.now() + "";
var finalizado = false;
var salvando = false;
var corretas = [];

if (location.protocol == "file:") {
    window.location = "http://127.0.0.1:3333/login.html?destino=senha.html";
} else if (!sessionStorage.ID_USUARIO) {
    window.location = "login.html?destino=senha.html";
}

function verificarRegras() {
    if (finalizado == false && salvando == false) {
        var senha = ipt_senha_ficticia.value;
        if (inicio == 0 && senha.length > 0) {
            inicio = Date.now();
            relogio = setInterval(atualizarTempo, 1000);
        }
        var maiusculas = 0;
        var minusculas = 0;
        var numeros = 0;
        var simbolos = 0;
        var espacos = 0;
        var pares = 0;
        var impares = 0;
        for (var i = 0; i < senha.length; i++) {
            var letra = senha[i];
            if (letra >= "A" && letra <= "Z") maiusculas++;
            if (letra >= "a" && letra <= "z") minusculas++;
            if (letra >= "0" && letra <= "9") {
                numeros++;
                if (Number(letra) % 2 == 0) pares++;
                else impares++;
            }
            if (letra == "!" || letra == "@" || letra == "#" || letra == "$" || letra == "?") simbolos++;
            if (letra == " ") espacos++;
        }
        corretas = [senha.length >= 8, maiusculas >= 1, minusculas >= 1, numeros >= 1,
            simbolos >= 1, senha.length >= 12, numeros >= 3, minusculas >= 3,
            espacos == 0 && senha.length > 0, maiusculas >= 2, pares >= 1, impares >= 1,
            senha.length >= 16, numeros >= 4, senha[senha.length - 1] == "?"];
        var cumpridas = 0;
        while (cumpridas < 15 && corretas[cumpridas] == true) cumpridas++;
        if (cumpridas >= nivel && cumpridas < 15) nivel = cumpridas + 1;
        if (cumpridas == 15) nivel = 15;
        desenharRegras();
        if (cumpridas == 15) salvarSenha();
    }
}

function desenharRegras() {
    regras.innerHTML = "";
    for (var i = nivel - 1; i >= 0; i--) {
        if (corretas[i] == true) {
            regras.innerHTML += '<div class="rule ok"><i>✓</i><span>' + regrasSenha[i] + '</span></div>';
        } else {
            regras.innerHTML += '<div class="rule fail"><i>' + (i + 1) + '</i><span>' + regrasSenha[i] + '</span></div>';
        }
    }
    nivel_atual.innerHTML = nivel;
    regras_total.innerHTML = nivel + " / 15";
    progresso.style.width = nivel * 100 / 15 + "%";
}

function atualizarTempo() {
    if (inicio > 0) {
        segundos = Math.floor((Date.now() - inicio) / 1000);
        var minutos = Math.floor(segundos / 60);
        var resto = segundos % 60;
        var textoMin = minutos;
        var textoSeg = resto;
        if (minutos < 10) textoMin = "0" + minutos;
        if (resto < 10) textoSeg = "0" + resto;
        cronometro.innerHTML = textoMin + ":" + textoSeg;
    }
}

function salvarSenha() {
    if (finalizado == false && salvando == false) {
        if (ipt_senha_ficticia.value == "") {
            mensagem.innerHTML = "Digite uma senha fictícia antes de salvar.";
            return;
        }
        var completo = 1;
        for (var i = 0; i < 15; i++) {
            if (corretas[i] != true) completo = 0;
        }
        atualizarTempo();
        salvando = true;
        ipt_senha_ficticia.disabled = true;
        fetch("/partidas/senha", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ jogador: sessionStorage.ID_USUARIO, id: idPartida, nivel: nivel, tempoSegundos: segundos, completo: completo })
        }).then(function (resposta) {
            salvando = false;
            if (resposta.ok) {
                finalizado = true;
                clearInterval(relogio);
                ipt_senha_ficticia.value = "";
                btn_salvar.disabled = true;
                var titulo = "PROGRESSO REGISTRADO";
                if (completo == 1) titulo = "ACESSO CONCEDIDO";
                resultado_senha.innerHTML = "<h3>" + titulo + "</h3><p>Regra alcançada: " + nivel + "/15. Tempo: " + cronometro.innerHTML + "</p><a class='action-btn action-outline' href='dashboard.html'>VER RESULTADOS ↗</a>";
                resultado_senha.style.display = "block";
                mensagem.innerHTML = "";
            } else {
                ipt_senha_ficticia.disabled = false;
                mensagem.innerHTML = "Não foi possível salvar. Tente novamente.";
            }
        }).catch(function () {
            salvando = false;
            ipt_senha_ficticia.disabled = false;
            mensagem.innerHTML = "Servidor indisponível.";
        });
    }
}

function reiniciarSenha() {
    if (salvando == false) {
        clearInterval(relogio);
        inicio = 0;
        segundos = 0;
        nivel = 1;
        corretas = [];
        idPartida = Date.now() + "";
        finalizado = false;
        cronometro.innerHTML = "00:00";
        ipt_senha_ficticia.value = "";
        ipt_senha_ficticia.disabled = false;
        btn_salvar.disabled = false;
        resultado_senha.style.display = "none";
        mensagem.innerHTML = "";
        desenharRegras();
    }
}

desenharRegras();
