var pessoas = [
  {
    "nome": "Bruno Dias",
    "arquivo": "bruno",
    "fase": "Desde a infância. O Bruno é meu irmão e faz parte de uma época em que tecnologia ainda não era matéria de faculdade nem algo que eu precisava apresentar. Era uma coisa que me despertava curiosidade. Quando volto ao começo dessa história, é dele que eu lembro.",
    "contribuicao": "Escolher tecnologia como tema tem muito a ver com essa influência que veio de casa. Hoje consigo abrir o editor e construir uma página sobre um assunto de que gosto. Entre aquela curiosidade de criança e o BLACKWALL tem um caminho longo, e eu queria que o nome do meu irmão aparecesse justamente onde conto como esse caminho começou."
  },
  {
    "nome": "Luiza Poe",
    "arquivo": "luiza",
    "fase": "Conheci a Luiza no primeiro ano do ensino médio. Quando penso nela hoje, é fácil começar dizendo que é minha namorada, mas tem outra parte que é tão importante pra mim quanto essa: ela é minha melhor amiga. Ela me conhece desde antes da SPTech, quando esse projeto ainda nem existia.",
    "contribuicao": "Quando alguém abre o BLACKWALL, conhece um pedaço meu pelo que eu fiz na faculdade. A Luiza conhece o Vitor que chegou até aqui. Ter minha melhor amiga e minha namorada na mesma pessoa é uma parte muito bonita da minha vida. Luiza, eu quis colocar uma foto nossa aqui porque, quando eu olhar pra esse projeto daqui a alguns anos, quero lembrar também de quem estava comigo nessa época."
  },
  {
    "nome": "Kauã",
    "arquivo": "kaua",
    "fase": "Conheci o Kauã na SPTech. A gente se conheceu numa fase em que eu estava aprendendo a conciliar as matérias, as entregas e o projeto individual. Quando penso nas pessoas que fizeram diferença pra mim dentro da faculdade, o nome dele é um dos primeiros que quero registrar aqui.",
    "contribuicao": "O que eu agradeço ao Kauã é o apoio emocional. Teve semana em que era difícil acompanhar tudo, e poder contar com ele fez diferença na forma como eu atravessei essa fase. Na apresentação eu consigo mostrar uma página pronta e explicar como fiz. Já o que significou pra mim ter esse apoio só aparece se eu parar pra contar. Kauã, obrigado por ter estado comigo."
  },
  {
    "nome": "Otávio",
    "arquivo": "otavio",
    "fase": "Conheci o Otávio na SPTech. Quando eu cheguei, ele já era veterano. Isso faz parte da lembrança que tenho dele porque, enquanto eu ainda estava descobrindo como lidar com a faculdade, ele já conhecia aquele ambiente por dentro.",
    "contribuicao": "O Otávio me deu muito apoio emocional, tanto em relação ao projeto quanto à minha experiência na SPTech. Pra mim, as duas coisas andavam juntas. Às vezes o que pesava era uma entrega específica. Outras vezes era conciliar o projeto com todo o resto. Otávio, ter o apoio de alguém que já conhecia essa rotina significou muito pra mim. Quis agradecer por isso aqui, no próprio projeto."
  },
  {
    "nome": "Pedro G.",
    "arquivo": "pedro",
    "fase": "Eu e o Pedro G. nos conhecemos na SPTech. A faculdade é onde essa parte da minha história começa e é também o motivo de eu querer registrar o nome dele aqui. Quando eu lembrar desse período, quero conseguir lembrar das pessoas com a mesma facilidade com que lembro dos projetos.",
    "contribuicao": "Do Pedro, o que eu levo dessa fase é o apoio emocional. Tem uma parte de fazer faculdade que é bem pessoal: como a gente se sente tentando dar conta das coisas. Foi nessa parte que ele fez diferença pra mim. Pedro, quando eu digo que você faz parte dessa entrega, é isso que eu quero dizer. Seu apoio importou pra pessoa que estava aqui tentando terminar tudo."
  },
  {
    "nome": "Gregory",
    "arquivo": "gregory",
    "fase": "Conheci o Gregory na SPTech. Ele é um amigo que faz parte dessa etapa da minha vida na faculdade.",
    "contribuicao": "Gregory, obrigado pela amizade e por fazer parte da minha trajetória na SPTech. Quis deixar um espaço pra você aqui também."
  }
];
var atual = 0;

function mostrarPessoa() {
    var pessoa = pessoas[atual];
    nome.innerHTML = pessoa.nome;
    fase.innerHTML = pessoa.fase;
    contribuicao.innerHTML = pessoa.contribuicao;
    posicao.innerHTML = "0" + (atual + 1) + " / 0" + pessoas.length;
    foto.src = "assets/pessoas/" + pessoa.arquivo + ".jpg";
    foto.alt = "Foto de " + pessoa.nome;
    abrir_bruno.hidden = true;
    if (pessoa.arquivo == "bruno") abrir_bruno.hidden = false;
}

function trocarPessoa(passo) {
    atual = atual + passo;
    if (atual < 0) atual = pessoas.length - 1;
    if (atual == pessoas.length) atual = 0;
    mostrarPessoa();
}

for (var i = 0; i < pessoas.length; i++) {
    if (location.hash == "#" + pessoas[i].arquivo) atual = i;
}
mostrarPessoa();
