CREATE DATABASE IF NOT EXISTS blackwall_local;
USE blackwall_local;

-- USUÁRIO MYSQL

CREATE USER IF NOT EXISTS 'blackwall'@'localhost'
IDENTIFIED BY 'Blackwall@2026';

GRANT SELECT, INSERT, UPDATE, DELETE
ON blackwall_local.* TO 'blackwall'@'localhost';


-- CRIAÇÃO DAS TABELAS

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80) NOT NULL,
    email VARCHAR(160) NOT NULL UNIQUE,
    senha VARCHAR(128) NOT NULL
);


-- RELACIONAMENTO 1:1

CREATE TABLE perfil (
    fkUsuario INT PRIMARY KEY,
    apelido VARCHAR(45),
    descricao VARCHAR(200),
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);


CREATE TABLE pergunta (
    id INT PRIMARY KEY,
    categoria VARCHAR(45) NOT NULL,
    enunciado VARCHAR(500) NOT NULL
);


-- RELACIONAMENTO N:N

CREATE TABLE resposta (
    jogador INT NOT NULL,
    partida VARCHAR(64) NOT NULL,
    pergunta INT NOT NULL,
    tipo VARCHAR(12) NOT NULL,
    escolha VARCHAR(12) NOT NULL,

    PRIMARY KEY (jogador, partida, pergunta),

    FOREIGN KEY (jogador) REFERENCES usuario(id),
    FOREIGN KEY (pergunta) REFERENCES pergunta(id)
);


-- RELACIONAMENTO 1:N

CREATE TABLE desafioSenha (
    jogador INT NOT NULL,
    partida VARCHAR(64) NOT NULL,
    nivel INT NOT NULL,
    segundos INT NOT NULL,
    completo TINYINT NOT NULL,

    PRIMARY KEY (jogador, partida),

    FOREIGN KEY (jogador) REFERENCES usuario(id)
);


-- INSERTS DE USUÁRIOS

INSERT INTO usuario (id, nome, email, senha) VALUES
    (1, 'Lucas Silva', 'lucas@email.com', 'Lucas@123'),
    (2, 'Ana Santos', 'ana@email.com', 'Ana@12345'),
    (3, 'Pedro Lima', 'pedro@email.com', 'Pedro@123');


-- INSERTS DE PERFIS

INSERT INTO perfil (fkUsuario, apelido, descricao) VALUES
    (1, 'Netrunner', 'Interessado em tecnologia e segurança'),
    (2, 'Ghost', 'Fã do universo Cyberpunk'),
    (3, 'Runner', 'Interessado em jogos e desafios');


-- PERGUNTAS REAIS

INSERT INTO pergunta (id, categoria, enunciado) VALUES

    (301, 'CYBERWARE',
    'Já existe um polegar robótico extra que uma pessoa consegue controlar com os dedos dos pés?'),

    (302, 'BIOTECH',
    'Já foi criado um robô que se movimenta a partir dos sinais elétricos de fungos vivos?'),

    (303, 'SYNTH',
    'Já foi criado um rosto robótico coberto por pele humana cultivada que consegue sorrir?'),

    (304, 'WARFARE',
    'Já foi colocado à venda um cachorro robótico equipado com lança-chamas?'),

    (305, 'SOUL',
    'Já existe um serviço que permite fazer perguntas a uma versão digital de alguém depois da morte dessa pessoa?'),

    (306, 'CYBERWARE',
    'Já foi feita uma pele eletrônica que usa o próprio suor como fonte de energia?'),

    (307, 'CORPO',
    'Já foi possível recuperar DNA humano do ar de uma sala sem encostar nas pessoas presentes?'),

    (308, 'BRAINDANCE',
    'Já existem óculos que percebem movimentos do rosto usando som, sem filmá-lo?'),

    (309, 'NETRUNNING',
    'Já foi possível medir batimentos cardíacos usando apenas sinais de Wi-Fi, sem encostar na pessoa?'),

    (310, 'DESIRE',
    'Já existem películas eletrônicas usadas sobre a pele que mudam de aparência por comando elétrico?'),

    (311, 'UNDERWORLD',
    'Já houve um golpe milionário em que quase todos os participantes de uma reunião por vídeo eram rostos falsos?'),

    (312, 'BIOTECH',
    'Já foram testados dispositivos robóticos flexíveis que abraçam um coração enquanto ele bate?');


-- PERGUNTAS FICTÍCIAS

INSERT INTO pergunta (id, categoria, enunciado) VALUES

    (401, 'CYBERWARE',
    'Já existe um polegar robótico extra vendido para gamers que responde aos movimentos do maxilar?'),

    (402, 'BIOTECH',
    'Já existem robôs domésticos que usam fungos vivos para reconhecer a voz dos moradores?'),

    (403, 'SYNTH',
    'Já existem robôs com pele humana viva que transpira para resfriar seus motores?'),

    (404, 'WARFARE',
    'Já são vendidos cães robóticos de segurança residencial que decidem sozinhos quando disparar um lança-chamas?'),

    (405, 'SOUL',
    'Já existe uma funerária que aluga uma réplica robótica da pessoa falecida para receber convidados no velório?'),

    (406, 'CYBERWARE',
    'Já existe uma pulseira fitness à venda que funciona sem bateria, alimentada apenas pelo suor?'),

    (407, 'CORPO',
    'Já existem estações em shoppings que identificam automaticamente cada visitante pelo DNA coletado do ar?'),

    (408, 'BRAINDANCE',
    'Já existem óculos que descobrem se alguém está mentindo apenas pelos ecos dos movimentos do rosto?'),

    (409, 'NETRUNNING',
    'Já existem roteadores Wi-Fi domésticos que reconhecem cada morador especificamente pelo ritmo do coração?'),

    (410, 'DESIRE',
    'Já existe tatuagem eletrônica que exibe na pele o texto completo das mensagens recebidas no celular?'),

    (411, 'UNDERWORLD',
    'Já existe um golpe em que uma chamada falsa consegue imitar ao vivo todos os colegas apenas com os nomes salvos no celular?'),

    (412, 'BIOTECH',
    'Já existe uma faixa robótica para o coração que libera remédios quando reconhece o estresse emocional do paciente?');


-- RESPOSTAS DO QUIZ

INSERT INTO resposta
    (jogador, partida, pergunta, tipo, escolha)
VALUES
    (1, '1001', 301, 'realidade', 'realidade'),
    (1, '1001', 302, 'realidade', 'ficcao'),
    (1, '1001', 303, 'realidade', 'realidade'),
    (1, '1001', 304, 'realidade', 'realidade'),
    (1, '1001', 305, 'realidade', 'ficcao'),
    (1, '1001', 306, 'realidade', 'realidade'),
    (1, '1001', 401, 'ficcao', 'ficcao'),
    (1, '1001', 402, 'ficcao', 'ficcao'),
    (1, '1001', 403, 'ficcao', 'realidade'),
    (1, '1001', 404, 'ficcao', 'ficcao'),
    (1, '1001', 405, 'ficcao', 'ficcao'),
    (1, '1001', 406, 'ficcao', 'ficcao'),

    (2, '1002', 301, 'realidade', 'realidade'),
    (2, '1002', 302, 'realidade', 'realidade'),
    (2, '1002', 401, 'ficcao', 'ficcao'),
    (2, '1002', 402, 'ficcao', 'realidade'),

    (3, '1003', 301, 'realidade', 'ficcao'),
    (3, '1003', 302, 'realidade', 'realidade'),
    (3, '1003', 401, 'ficcao', 'ficcao'),
    (3, '1003', 402, 'ficcao', 'ficcao');


-- PARTIDAS DO JOGO DA SENHA

INSERT INTO desafioSenha
    (jogador, partida, nivel, segundos, completo)
VALUES
    (1, '2001', 8, 120, 0),
    (1, '2002', 12, 180, 0),
    (1, '2003', 15, 240, 1),

    (2, '2004', 6, 90, 0),
    (2, '2005', 15, 210, 1),

    (3, '2006', 10, 150, 0),
    (3, '2007', 15, 190, 1);


-- SELECTS DAS TABELAS

SELECT * FROM usuario;
SELECT * FROM perfil;
SELECT * FROM pergunta;
SELECT * FROM resposta;
SELECT * FROM desafioSenha;


-- RELACIONAMENTO 1:1
-- USUÁRIO E PERFIL

SELECT usuario.nome,
       perfil.apelido,
       perfil.descricao,
       perfil.dataCadastro
FROM usuario
JOIN perfil ON usuario.id = perfil.fkUsuario;


-- RELACIONAMENTO 1:N
-- USUÁRIO E PARTIDAS

SELECT usuario.nome,
       desafioSenha.partida,
       desafioSenha.nivel,
       desafioSenha.segundos,
       desafioSenha.completo
FROM usuario
JOIN desafioSenha ON usuario.id = desafioSenha.jogador;


-- RELACIONAMENTO N:N
-- USUÁRIOS E PERGUNTAS

SELECT usuario.nome,
       pergunta.enunciado,
       resposta.tipo,
       resposta.escolha
FROM usuario
JOIN resposta ON usuario.id = resposta.jogador
JOIN pergunta ON pergunta.id = resposta.pergunta;


-- =========================================
-- KPIs DA DASHBOARD
-- =========================================


-- KPI 1: TAXA DE ACERTO

SELECT usuario.nome,
       ROUND(
           SUM(resposta.tipo = resposta.escolha)
           * 100 / COUNT(*), 0
       ) AS taxaAcerto
FROM usuario
JOIN resposta ON usuario.id = resposta.jogador
WHERE usuario.id = 1
GROUP BY usuario.id, usuario.nome;


-- KPI 2: QUANTIDADE DE PARTIDAS DO QUIZ

SELECT usuario.nome,
       COUNT(DISTINCT resposta.partida) AS totalPartidas
FROM usuario
JOIN resposta ON usuario.id = resposta.jogador
WHERE usuario.id = 1
GROUP BY usuario.id, usuario.nome;


-- KPI 3: RECORDE DO JOGO DA SENHA

SELECT usuario.nome,
       MAX(desafioSenha.nivel) AS recorde
FROM usuario
JOIN desafioSenha ON usuario.id = desafioSenha.jogador
WHERE usuario.id = 1
GROUP BY usuario.id, usuario.nome;


-- KPI 4: DESAFIOS CONCLUÍDOS

SELECT usuario.nome,
       COUNT(desafioSenha.partida) AS desafiosConcluidos
FROM usuario
LEFT JOIN desafioSenha
    ON usuario.id = desafioSenha.jogador
    AND desafioSenha.completo = 1
WHERE usuario.id = 1
GROUP BY usuario.id, usuario.nome;


-- =========================================
-- CONSULTAS DOS GRÁFICOS
-- =========================================


-- GRÁFICO 1: ACERTOS E ERROS

SELECT usuario.nome,
       SUM(resposta.tipo = resposta.escolha) AS acertos,
       SUM(resposta.tipo != resposta.escolha) AS erros
FROM usuario
JOIN resposta ON usuario.id = resposta.jogador
WHERE usuario.id = 1
GROUP BY usuario.id, usuario.nome;


-- GRÁFICO 2: REALIDADE X FICÇÃO

SELECT resposta.tipo,
       COUNT(*) AS total,
       SUM(resposta.tipo = resposta.escolha) AS acertos,
       ROUND(
           SUM(resposta.tipo = resposta.escolha)
           * 100 / COUNT(*), 0
       ) AS porcentagem
FROM usuario
JOIN resposta ON usuario.id = resposta.jogador
WHERE usuario.id = 1
GROUP BY resposta.tipo;


-- GRÁFICO 3: EVOLUÇÃO NO QUIZ

SELECT resposta.partida,
       COUNT(*) AS totalPerguntas,
       SUM(resposta.tipo = resposta.escolha) AS acertos,
       ROUND(
           SUM(resposta.tipo = resposta.escolha)
           * 100 / COUNT(*), 0
       ) AS porcentagem
FROM usuario
JOIN resposta ON usuario.id = resposta.jogador
WHERE usuario.id = 1
GROUP BY resposta.partida
ORDER BY resposta.partida;


-- GRÁFICO 4: EVOLUÇÃO NO JOGO DA SENHA

SELECT desafioSenha.partida,
       desafioSenha.nivel,
       desafioSenha.segundos,
       desafioSenha.completo
FROM usuario
JOIN desafioSenha ON usuario.id = desafioSenha.jogador
WHERE usuario.id = 1
ORDER BY desafioSenha.partida;


-- MELHOR TEMPO DE CONCLUSÃO

SELECT usuario.nome,
       MIN(desafioSenha.segundos) AS melhorTempo
FROM usuario
JOIN desafioSenha ON usuario.id = desafioSenha.jogador
WHERE usuario.id = 1
AND desafioSenha.completo = 1
GROUP BY usuario.id, usuario.nome;