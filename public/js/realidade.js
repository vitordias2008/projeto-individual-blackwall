// REALIDADE OU CYBERPUNK? - 24 perguntas variadas (12 reais e 12 ficcoes).
// Por partida, o jogo sorteia 6 de cada tipo.
// As ficcoes sao extrapolacoes, nao uma prova absoluta de inexistencia.
var perguntasRealidade = [
  {
    "id": 301,
    "categoria": "CYBERWARE",
    "texto": "Já existe um polegar robótico extra que uma pessoa consegue controlar com os dedos dos pés?",
    "resposta": "realidade",
    "explicacao": "Sim. O Third Thumb usa sensores de pressão sob os pés para mover um polegar robótico extra. É um protótipo de aumento das capacidades da mão.",
    "fonte": "https://www.cam.ac.uk/stories/third-thumb"
  },
  {
    "id": 302,
    "categoria": "BIOTECH",
    "texto": "Já foi criado um robô que se movimenta a partir dos sinais elétricos de fungos vivos?",
    "resposta": "realidade",
    "explicacao": "Sim. Em Cornell, circuitos interpretaram sinais elétricos do micélio e os transformaram em movimentos de robôs com rodas e pernas.",
    "fonte": "https://news.cornell.edu/stories/2024/08/biohybrid-robots-controlled-electrical-impulses-mushrooms"
  },
  {
    "id": 303,
    "categoria": "SYNTH",
    "texto": "Já foi criado um rosto robótico coberto por pele humana cultivada que consegue sorrir?",
    "resposta": "realidade",
    "explicacao": "Sim. Um laboratório da Universidade de Tóquio prendeu tecido de pele cultivado a um mecanismo que forma um sorriso. Não era um robô humano completo.",
    "fonte": "https://www.u-tokyo.ac.jp/focus/en/press/z0508_00360.html"
  },
  {
    "id": 304,
    "categoria": "WARFARE",
    "texto": "Já foi colocado à venda um cachorro robótico equipado com lança-chamas?",
    "resposta": "realidade",
    "explicacao": "Sim. O Thermonator foi anunciado comercialmente nos Estados Unidos. Isso não significa que ele escolha alvos por conta própria.",
    "fonte": "https://arstechnica.com/gadgets/2024/04/you-can-now-buy-a-flame-throwing-robot-dog-for-under-10000/"
  },
  {
    "id": 305,
    "categoria": "SOUL",
    "texto": "Já existe um serviço que permite fazer perguntas a uma versão digital de alguém depois da morte dessa pessoa?",
    "resposta": "realidade",
    "explicacao": "Sim. Serviços como HereAfter AI permitem que familiares interajam com um retrato digital feito a partir de histórias e gravações anteriores.",
    "fonte": "https://www.reuters.com/lifestyle/it-feels-like-almost-hes-here-how-ai-is-changing-way-we-grieve-2025-09-13/"
  },
  {
    "id": 306,
    "categoria": "CYBERWARE",
    "texto": "Já foi feita uma pele eletrônica que usa o próprio suor como fonte de energia?",
    "resposta": "realidade",
    "explicacao": "Sim. Pesquisadores demonstraram sensores flexíveis que aproveitam compostos do suor para gerar a pequena quantidade de eletricidade de que precisam.",
    "fonte": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7326328/"
  },
  {
    "id": 307,
    "categoria": "CORPO",
    "texto": "Já foi possível recuperar DNA humano do ar de uma sala sem encostar nas pessoas presentes?",
    "resposta": "realidade",
    "explicacao": "Sim. Estudos recuperaram material genético humano de amostras do ar. Isso ainda não equivale a identificar instantaneamente todos em um local.",
    "fonte": "https://www.nature.com/articles/s41559-023-02056-2"
  },
  {
    "id": 308,
    "categoria": "BRAINDANCE",
    "texto": "Já existem óculos que percebem movimentos do rosto usando som, sem filmá-lo?",
    "resposta": "realidade",
    "explicacao": "Sim. Pesquisadores de Cornell desenvolveram óculos que usam ondas sonoras e seus ecos para acompanhar expressões e movimentos faciais.",
    "fonte": "https://news.cornell.edu/stories/2024/04/ai-powered-sonar-smartglasses-tracks-gaze-and-facial-expressions"
  },
  {
    "id": 309,
    "categoria": "NETRUNNING",
    "texto": "Já foi possível medir batimentos cardíacos usando apenas sinais de Wi-Fi, sem encostar na pessoa?",
    "resposta": "realidade",
    "explicacao": "Sim. Pesquisadores demonstraram que alterações em sinais Wi-Fi podem estimar a frequência cardíaca. Era um protótipo de pesquisa.",
    "fonte": "https://www.universityofcalifornia.edu/news/wifi-signals-can-measure-heart-rate-no-wearables-needed"
  },
  {
    "id": 310,
    "categoria": "DESIRE",
    "texto": "Já existem películas eletrônicas usadas sobre a pele que mudam de aparência por comando elétrico?",
    "resposta": "realidade",
    "explicacao": "Sim. O projeto ECSkin criou películas que mudam visualmente por ação elétrica e podem ser combinadas em desenhos sobre a pele.",
    "fonte": "https://www.hybridbody.human.cornell.edu/ecskin"
  },
  {
    "id": 311,
    "categoria": "UNDERWORLD",
    "texto": "Já houve um golpe milionário em que quase todos os participantes de uma reunião por vídeo eram rostos falsos?",
    "resposta": "realidade",
    "explicacao": "Sim. A polícia de Hong Kong relatou uma fraude em que deepfakes de colegas e executivos convenceram um funcionário a transferir dinheiro.",
    "fonte": "https://www.info.gov.hk/gia/general/202406/26/P2024062600192.htm"
  },
  {
    "id": 312,
    "categoria": "BIOTECH",
    "texto": "Já foram testados dispositivos robóticos flexíveis que abraçam um coração enquanto ele bate?",
    "resposta": "realidade",
    "explicacao": "Sim. Cientistas criaram estruturas flexíveis capazes de envolver um coração e realizar medições e estimulação em testes experimentais.",
    "fonte": "https://www.nature.com/articles/s41467-024-48903-z"
  },
  {
    "id": 401,
    "categoria": "CYBERWARE",
    "texto": "Já existe um polegar robótico extra vendido para gamers que responde aos movimentos do maxilar?",
    "resposta": "ficcao",
    "explicacao": "Existem polegares robóticos extras controlados por pressão dos pés e por sinais musculares em pesquisas. Essa versão comercial para jogadores, comandada pelo maxilar, é uma extrapolação.",
    "fonte": "https://www.cam.ac.uk/stories/third-thumb"
  },
  {
    "id": 402,
    "categoria": "BIOTECH",
    "texto": "Já existem robôs domésticos que usam fungos vivos para reconhecer a voz dos moradores?",
    "resposta": "ficcao",
    "explicacao": "Fungos já participaram do controle de robôs experimentais. Usar o micélio como sistema doméstico para reconhecer vozes ainda não foi demonstrado.",
    "fonte": "https://news.cornell.edu/stories/2024/08/biohybrid-robots-controlled-electrical-impulses-mushrooms"
  },
  {
    "id": 403,
    "categoria": "SYNTH",
    "texto": "Já existem robôs com pele humana viva que transpira para resfriar seus motores?",
    "resposta": "ficcao",
    "explicacao": "A pele humana cultivada sobre robôs é real. Mas integrar glândulas de suor funcionais para refrigerar motores continua sendo uma possibilidade, não uma realização documentada.",
    "fonte": "https://www.u-tokyo.ac.jp/focus/en/press/z0508_00360.html"
  },
  {
    "id": 404,
    "categoria": "WARFARE",
    "texto": "Já são vendidos cães robóticos de segurança residencial que decidem sozinhos quando disparar um lança-chamas?",
    "resposta": "ficcao",
    "explicacao": "Cães robóticos com lança-chamas existem para venda. A decisão autônoma de disparar contra pessoas em segurança doméstica é a extrapolação fictícia.",
    "fonte": "https://arstechnica.com/gadgets/2024/04/you-can-now-buy-a-flame-throwing-robot-dog-for-under-10000/"
  },
  {
    "id": 405,
    "categoria": "SOUL",
    "texto": "Já existe uma funerária que aluga uma réplica robótica da pessoa falecida para receber convidados no velório?",
    "resposta": "ficcao",
    "explicacao": "Há avatares digitais de pessoas falecidas e robôs com aparência humana. Não há confirmação pública confiável desse serviço funerário específico.",
    "fonte": "https://www.reuters.com/lifestyle/it-feels-like-almost-hes-here-how-ai-is-changing-way-we-grieve-2025-09-13/"
  },
  {
    "id": 406,
    "categoria": "CYBERWARE",
    "texto": "Já existe uma pulseira fitness à venda que funciona sem bateria, alimentada apenas pelo suor?",
    "resposta": "ficcao",
    "explicacao": "O suor já alimentou sensores experimentais. Uma pulseira fitness comercial que dispensa bateria e usa apenas suor ainda não foi confirmada.",
    "fonte": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7326328/"
  },
  {
    "id": 407,
    "categoria": "CORPO",
    "texto": "Já existem estações em shoppings que identificam automaticamente cada visitante pelo DNA coletado do ar?",
    "resposta": "ficcao",
    "explicacao": "É possível coletar DNA humano do ar. Transformar isso em identificação individual automática de clientes em shoppings não é uma aplicação pública confirmada.",
    "fonte": "https://www.nature.com/articles/s41559-023-02056-2"
  },
  {
    "id": 408,
    "categoria": "BRAINDANCE",
    "texto": "Já existem óculos que descobrem se alguém está mentindo apenas pelos ecos dos movimentos do rosto?",
    "resposta": "ficcao",
    "explicacao": "Óculos com sonar já captam movimentos faciais. Dizer com confiabilidade se alguém está mentindo só a partir desses sinais vai além do que foi demonstrado.",
    "fonte": "https://news.cornell.edu/stories/2024/04/ai-powered-sonar-smartglasses-tracks-gaze-and-facial-expressions"
  },
  {
    "id": 409,
    "categoria": "NETRUNNING",
    "texto": "Já existem roteadores Wi-Fi domésticos que reconhecem cada morador especificamente pelo ritmo do coração?",
    "resposta": "ficcao",
    "explicacao": "Wi-Fi já foi usado para estimar batimentos cardíacos. Identificar nominalmente cada morador por esse ritmo, como um recurso doméstico, é uma extrapolação.",
    "fonte": "https://www.universityofcalifornia.edu/news/wifi-signals-can-measure-heart-rate-no-wearables-needed"
  },
  {
    "id": 410,
    "categoria": "DESIRE",
    "texto": "Já existe tatuagem eletrônica que exibe na pele o texto completo das mensagens recebidas no celular?",
    "resposta": "ficcao",
    "explicacao": "Há películas eletrônicas que mudam de aparência e tatuagens usadas como sensores. Uma tatuagem que mostre mensagens completas como uma tela ainda não foi confirmada.",
    "fonte": "https://www.hybridbody.human.cornell.edu/ecskin"
  },
  {
    "id": 411,
    "categoria": "UNDERWORLD",
    "texto": "Já existe um golpe em que uma chamada falsa consegue imitar ao vivo todos os colegas apenas com os nomes salvos no celular?",
    "resposta": "ficcao",
    "explicacao": "Golpes com reuniões falsas e deepfakes são reais. Recriar em tempo real o rosto e a voz de todos usando apenas nomes de contatos é a extrapolação.",
    "fonte": "https://www.info.gov.hk/gia/general/202406/26/P2024062600192.htm"
  },
  {
    "id": 412,
    "categoria": "BIOTECH",
    "texto": "Já existe uma faixa robótica para o coração que libera remédios quando reconhece o estresse emocional do paciente?",
    "resposta": "ficcao",
    "explicacao": "Estruturas flexíveis já foram experimentadas no coração para monitoramento e estimulação. Liberar medicamentos em resposta ao estado emocional é uma proposta não demonstrada.",
    "fonte": "https://www.nature.com/articles/s41467-024-48903-z"
  }
];


var perguntas = [];
var escolhidas = [];
var indice = 0;
var acertos = 0;
var idPartida = 0;
var respondida = false;

if (location.protocol == "file:") {
    window.location = "http://127.0.0.1:3333/login.html?destino=realidade.html";
} else if (!sessionStorage.ID_USUARIO) {
    window.location = "login.html?destino=realidade.html";
}

function iniciarRealidade() {
    perguntas = [];
    escolhidas = [];
    indice = 0;
    acertos = 0;
    idPartida = Date.now() + "";
    // Sorteia seis perguntas reais e seis fictícias, sem repetir.
    var reais = 0;
    var ficcoes = 0;
    while (perguntas.length < 12) {
        var sorteio = Math.floor(Math.random() * perguntasRealidade.length);
        var item = perguntasRealidade[sorteio];
        if (!escolhidas[sorteio]) {
            if (item.resposta == "realidade" && reais < 6) {
                perguntas[perguntas.length] = item;
                escolhidas[sorteio] = true;
                reais++;
            } else if (item.resposta == "ficcao" && ficcoes < 6) {
                perguntas[perguntas.length] = item;
                escolhidas[sorteio] = true;
                ficcoes++;
            }
        }
    }
    painel_inicio.style.display = "none";
    painel_final.style.display = "none";
    painel_questao.style.display = "block";
    mostrarPergunta();
}

function mostrarPergunta() {
    var item = perguntas[indice];
    categoria.innerHTML = "// " + item.categoria;
    contador.innerHTML = (indice + 1) + " / 12";
    pergunta.innerHTML = item.texto;
    progresso.style.width = (indice + 1) * 100 / 12 + "%";
    feedback.style.display = "none";
    proxima.style.display = "none";
    mensagem.innerHTML = "";
    respondida = false;
}

function responderRealidade(escolha) {
    if (respondida == false) {
        respondida = true;
        mensagem.innerHTML = "Salvando resposta...";
        var item = perguntas[indice];
        fetch("/partidas/quiz", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ jogador: sessionStorage.ID_USUARIO, id: idPartida, idPergunta: item.id, escolha: escolha })
        }).then(function (resposta) {
            if (resposta.ok) {
                var titulo = "NÃO FOI DESSA VEZ";
                var tipo = "CYBERPUNK";
                if (item.resposta == "realidade") tipo = "REALIDADE";
                if (escolha == item.resposta) {
                    acertos++;
                    titulo = "RESPOSTA CORRETA";
                    feedback.className = "feedback-box";
                } else {
                    feedback.className = "feedback-box errou";
                }
                feedback.innerHTML = "<strong>" + titulo + " / " + tipo + "</strong><span>" + item.explicacao + "</span><a class='feedback-source' target='_blank' rel='noopener' href='" + item.fonte + "'>VER FONTE ↗</a>";
                feedback.style.display = "block";
                proxima.style.display = "inline-flex";
                proxima.innerHTML = "PRÓXIMA PERGUNTA ↗";
                if (indice == 11) proxima.innerHTML = "VER RESULTADO ↗";
                mensagem.innerHTML = "";
            } else {
                respondida = false;
                mensagem.innerHTML = "Não foi possível salvar. Tente novamente.";
            }
        }).catch(function () {
            respondida = false;
            mensagem.innerHTML = "Servidor indisponível.";
        });
    }
}

function proximaPergunta() {
    if (respondida == false || proxima.style.display == "none") return;
    proxima.style.display = "none";
    indice++;
    if (indice == 12) {
        painel_questao.style.display = "none";
        painel_final.style.display = "block";
        resultado_numero.innerHTML = acertos + "/12";
        resultado_texto.innerHTML = "Você acertou " + Math.round(acertos * 100 / 12) + "%. Resultado salvo na sua conta.";
    } else {
        mostrarPergunta();
    }
}
