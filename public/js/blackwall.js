var casoAtual = 0;

function mostrarCaso(numero) {
    casoAtual = numero;
    var cards = [card_0, card_1, card_2];
    var textos = [info_0, info_1, info_2];
    var pontos = [ponto_0, ponto_1, ponto_2];
    for (var i = 0; i < 3; i++) {
        if (i == casoAtual) {
            cards[i].className = "case-slide case-slide--active";
            textos[i].hidden = false;
            pontos[i].className = "case-dot is-active";
            cards[i].style.order = 0;
        } else {
            cards[i].className = "case-slide";
            textos[i].hidden = true;
            pontos[i].className = "case-dot";
            cards[i].style.order = (i - casoAtual + 3) % 3;
        }
    }
    case_counter.innerHTML = "0" + (casoAtual + 1) + " / 03";
}

function proximoCaso() {
    casoAtual++;
    if (casoAtual == 3) casoAtual = 0;
    mostrarCaso(casoAtual);
}

function casoAnterior() {
    casoAtual--;
    if (casoAtual < 0) casoAtual = 2;
    mostrarCaso(casoAtual);
}

function voltarTopo() {
    window.scrollTo(0, 0);
}

mostrarCaso(0);
