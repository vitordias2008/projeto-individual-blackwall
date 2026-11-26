var graficos = [];
var ciano = "#80d9d4";
var vermelho = "#ef8499";
var corTexto = "#b8c8cd";
var corGrade = "#29414a";

function limparGraficos() {
    for (var i = 0; i < graficos.length; i++) {
        graficos[i].destroy();
    }
    graficos = [];
}

function mostrarQuiz(quiz) {
    var reais = 0;
    var ficcoes = 0;
    var acertosReais = 0;
    var acertosFiccao = 0;
    var partidas = [];
    var totais = [];
    var acertosPartida = [];
    var completos = 0;

    for (var i = 0; i < quiz.length; i++) {
        var resposta = quiz[i];
        var posicao = partidas.length - 1;

        if (posicao < 0 || partidas[posicao] != resposta.partida) {
            posicao++;
            partidas.push(resposta.partida);
            totais.push(0);
            acertosPartida.push(0);
        }
        totais[posicao]++;

        if (resposta.tipo == "realidade") {
            reais++;
            if (resposta.escolha == resposta.tipo) acertosReais++;
        } else {
            ficcoes++;
            if (resposta.escolha == resposta.tipo) acertosFiccao++;
        }
        if (resposta.escolha == resposta.tipo) acertosPartida[posicao]++;
    }

    for (var i = 0; i < totais.length; i++) {
        if (totais[i] == 12) completos++;
    }

    var total = reais + ficcoes;
    var acertos = acertosReais + acertosFiccao;
    var percentualReal = null;
    var percentualFiccao = null;
    taxa.innerHTML = "—";
    amostra.innerHTML = "Nenhuma resposta registrada";
    partidas_quiz.innerHTML = partidas.length;
    quiz_completos.innerHTML = completos + " concluídas";
    leitura.innerHTML = "";
    historico_quiz.innerHTML = "";
    vazio_acertos.hidden = false;
    vazio_tipos.hidden = false;
    vazio_quiz.hidden = false;
    vazio_acertos.innerHTML = "Nenhuma resposta registrada.";
    vazio_tipos.innerHTML = "Nenhuma resposta registrada.";
    vazio_quiz.innerHTML = "Jogue para acompanhar sua evolução.";

    if (total > 0) {
        taxa.innerHTML = Math.round(acertos * 100 / total) + "%";
        amostra.innerHTML = acertos + " de " + total + " respostas corretas";
        if (reais > 0) percentualReal = Math.round(acertosReais * 100 / reais);
        if (ficcoes > 0) percentualFiccao = Math.round(acertosFiccao * 100 / ficcoes);

        var textoReal = "Sem respostas";
        var textoFiccao = "Sem respostas";
        if (reais > 0) textoReal = percentualReal + "% (" + acertosReais + "/" + reais + ")";
        if (ficcoes > 0) textoFiccao = percentualFiccao + "% (" + acertosFiccao + "/" + ficcoes + ")";
        leitura.innerHTML = "Realidade: " + textoReal + " · Ficção: " + textoFiccao + ".";
        if (reais > 0 && ficcoes > 0) {
            if (acertosReais / reais > acertosFiccao / ficcoes) leitura.innerHTML += " Você reconheceu melhor tecnologias reais.";
            else if (acertosReais / reais < acertosFiccao / ficcoes) leitura.innerHTML += " Você reconheceu melhor tecnologias fictícias.";
            else leitura.innerHTML += " Seu desempenho foi igual nos dois tipos.";
        }

        var inicio = partidas.length - 8;
        if (inicio < 0) inicio = 0;
        var rotulos = [];
        var notas = [];
        for (var i = inicio; i < partidas.length; i++) {
            rotulos.push("Partida " + (i + 1));
            notas.push(Math.round(acertosPartida[i] * 100 / totais[i]));
        }
        historico_quiz.innerHTML = "Última partida: " + acertosPartida[partidas.length - 1] + " de " + totais[partidas.length - 1] + " respostas corretas.";

        if (typeof Chart != "undefined") {
            vazio_acertos.hidden = true;
            vazio_tipos.hidden = true;
            vazio_quiz.hidden = true;
            graficos.push(new Chart(grafico_acertos, {
                type: "doughnut",
                data: { labels: ["Acertos", "Erros"], datasets: [{ data: [acertos, total - acertos], backgroundColor: [ciano, vermelho], borderWidth: 0 }] },
                options: { responsive: true, maintainAspectRatio: false, cutout: "68%", plugins: { legend: { position: "bottom", labels: { color: corTexto } } } }
            }));
            graficos.push(new Chart(grafico_tipos, {
                type: "bar",
                data: { labels: ["Realidade", "Ficção"], datasets: [{ label: "Acertos (%)", data: [percentualReal, percentualFiccao], backgroundColor: [ciano, vermelho], borderRadius: 3, maxBarThickness: 80 }] },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 100, ticks: { color: corTexto, stepSize: 25 }, grid: { color: corGrade } }, x: { ticks: { color: corTexto }, grid: { display: false } } } }
            }));
            graficos.push(new Chart(grafico_quiz, {
                type: "line",
                data: { labels: rotulos, datasets: [{ label: "Acertos (%)", data: notas, borderColor: ciano, backgroundColor: "#80d9d41a", pointBackgroundColor: ciano, fill: true, tension: 0.2 }] },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 100, ticks: { color: corTexto, stepSize: 25 }, grid: { color: corGrade } }, x: { ticks: { color: corTexto }, grid: { display: false } } } }
            }));
        } else {
            vazio_acertos.innerHTML = acertos + " acertos / " + (total - acertos) + " erros";
            vazio_tipos.innerHTML = "Realidade: " + textoReal + " / Ficção: " + textoFiccao;
            vazio_quiz.innerHTML = "Últimas partidas (%): " + notas.join(" / ");
        }
    }
}

function mostrarSenhas(senhas) {
    var maior = 0;
    var concluidas = 0;
    var melhorTempo = -1;
    var rotulos = [];
    var niveis = [];
    var cores = [];
    ultimas.innerHTML = "";
    recorde.innerHTML = "—";
    vitorias.innerHTML = "0";
    tempo.innerHTML = "Melhor tempo: —";
    leitura_senha.innerHTML = "";
    vazio_senha.hidden = false;
    vazio_senha.innerHTML = "Nenhuma partida registrada.";

    for (var i = 0; i < senhas.length; i++) {
        var jogo = senhas[i];
        var situacao = "Incompleta";
        if (jogo.nivel > maior) maior = jogo.nivel;
        if (jogo.completo == 1) {
            situacao = "Concluída";
            concluidas++;
            if (melhorTempo == -1 || jogo.segundos < melhorTempo) melhorTempo = jogo.segundos;
        }
        if (i < 8) {
            ultimas.innerHTML += "<tr><td>" + (senhas.length - i) + "</td><td>" + Number(jogo.nivel) + "/15</td><td>" + Number(jogo.segundos) + " s</td><td>" + situacao + "</td></tr>";
        }
    }

    var inicio = senhas.length - 1;
    if (inicio > 7) inicio = 7;
    for (var i = inicio; i >= 0; i--) {
        rotulos.push("Partida " + (senhas.length - i));
        niveis.push(Number(senhas[i].nivel));
        if (senhas[i].completo == 1) cores.push(ciano);
        else cores.push(vermelho);
    }

    if (senhas.length > 0) {
        recorde.innerHTML = maior + "/15";
        vitorias.innerHTML = concluidas;
        if (melhorTempo >= 0) tempo.innerHTML = "Melhor tempo: " + melhorTempo + " s";
        leitura_senha.innerHTML = concluidas + " de " + senhas.length + " desafios concluídos. ";
        if (maior < 15) leitura_senha.innerHTML += "Faltam " + (15 - maior) + " regras para alcançar o nível 15.";
        else leitura_senha.innerHTML += "Você alcançou a última regra.";
        if (typeof Chart != "undefined") {
            vazio_senha.hidden = true;
            graficos.push(new Chart(grafico_senha, {
                type: "bar",
                data: { labels: rotulos, datasets: [{ label: "Regra alcançada", data: niveis, backgroundColor: cores, borderRadius: 3, maxBarThickness: 50 }] },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 15, ticks: { color: corTexto, stepSize: 3 }, grid: { color: corGrade } }, x: { ticks: { color: corTexto }, grid: { display: false } } } }
            }));
        } else {
            vazio_senha.innerHTML = "Últimas regras alcançadas: " + niveis.join(" / ");
        }
    } else {
        ultimas.innerHTML = '<tr><td colspan="4">Nenhuma partida registrada.</td></tr>';
    }
}

function carregarDashboard() {
    limparGraficos();
    mostrarQuiz([]);
    mostrarSenhas([]);
    mensagem.innerHTML = "";
    perfil_usuario.textContent = "";
    entrar.hidden = true;
    sair.hidden = true;
    recarregar.hidden = true;
    if (location.protocol == "file:") {
        resumo.innerHTML = "Abra pelo servidor local para consultar suas partidas.";
        entrar.href = "http://127.0.0.1:3333/login.html";
        entrar.hidden = false;
    } else if (!sessionStorage.ID_USUARIO) {
        resumo.innerHTML = "Entre na sua conta para consultar seus resultados.";
        entrar.hidden = false;
    } else {
        sair.hidden = false;
        perfil_usuario.textContent = sessionStorage.NOME_USUARIO;
        resumo.innerHTML = "Consultando suas partidas...";
        fetch("/partidas/dashboard/" + sessionStorage.ID_USUARIO).then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (dados) {
                    mostrarQuiz(dados.quiz);
                    mostrarSenhas(dados.senhas);
                    resumo.innerHTML = "Acompanhe seus resultados e sua evolução.";
                    if (dados.quiz.length == 0 && dados.senhas.length == 0) resumo.innerHTML = "Sua conta ainda não possui partidas. Escolha um jogo para começar.";
                    if (typeof Chart == "undefined") mensagem.innerHTML = "Chart.js não carregou. Os resultados continuam disponíveis em texto. Execute npm install e reinicie o servidor.";
                    recarregar.hidden = false;
                }).catch(function () {
                    resumo.innerHTML = "Não foi possível exibir os resultados.";
                    recarregar.hidden = false;
                });
            } else {
                resumo.innerHTML = "Não foi possível consultar suas partidas.";
                recarregar.hidden = false;
            }
        }).catch(function () {
            resumo.innerHTML = "Servidor indisponível.";
            recarregar.hidden = false;
        });
    }
}

function sairConta() {
    sessionStorage.clear();
    window.location = "login.html";
}

carregarDashboard();
