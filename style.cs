@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* Novo Tema: Exploração Espacial */
:root {
    --cor-fundo: #000D1A; /* Preto Profundo / Espaço */
    --cor-principal: #0A1B36; /* Azul Escuro da Cabine */
    --cor-secundaria: #1F385C; /* Azul Aço (botões/cartões) */
    --cor-destaque: #32E8C2; /* Ciano Esmeralda (destaque futurista) */
    --cor-texto: #F0FFFF; /* Branco Gelo / Luminoso */
}
 
body {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    /* Usando a fonte futurista como principal para um visual coeso */
    font-family: 'Chakra Petch', sans-serif; 
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.caixa-principal{
    background-color: var(--cor-principal);
    width: 90%;
    max-width: 600px;
    text-align: center;
    padding: 20px;
    /* Adicionando uma leve borda para um toque tecnológico */
    border: 1px solid var(--cor-secundaria);
}

/* Mantendo o título com a fonte de destaque */
h1 {
    font-family: 'Chakra Petch', sans-serif;
    color: var(--cor-destaque);
    text-transform: uppercase;
}

/* O corpo do texto pode usar a fonte mais legível para leitura longa */
.tela-inicial p {
    font-family: 'Inter', sans-serif;
}

button {
    background-color: var(--cor-secundaria);
    color: var(--cor-texto);
    border: none;
    border-radius: 5px; /* Botões mais angulares/tecnológicos */
    padding: 15px 25px;
    transition: background-color 0.3s, color 0.3s;
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 500;
}

button:hover {
    background-color: var(--cor-destaque);
    color: var(--cor-principal); /* Garante contraste no hover */
    /* Efeito de brilho ao passar o mouse */
    box-shadow: 0 0 10px var(--cor-destaque);
}

.caixa-resultado{
    display: none;
}

.caixa-resultado.mostrar{
    display: block;
}

.caixa-alternativas{
    display: flex;
    flex-direction: column;
    gap: 15px; /* Aumentei um pouco o espaçamento */
}

/* Ajuste para o texto de resultado, dando-lhe destaque */
.texto-resultado {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 1.2em;
    margin-bottom: 20px;
}