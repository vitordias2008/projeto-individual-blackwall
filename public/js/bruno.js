var fotos = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
var atual = 0;

function abrirFoto(numero) {
    atual = numero - 1;
    foto_grande.src = "assets/infancia/" + fotos[atual];
    foto_grande.alt = "Infância – foto " + (atual + 1);
    numero_foto.innerHTML = (atual + 1) + " / " + fotos.length;
    if (ampliacao.open == false) ampliacao.showModal();
}

function mudarFoto(passo) {
    atual = atual + passo;
    if (atual < 0) atual = fotos.length - 1;
    if (atual == fotos.length) atual = 0;
    abrirFoto(atual + 1);
}

function fecharFoto() {
    ampliacao.close();
}
