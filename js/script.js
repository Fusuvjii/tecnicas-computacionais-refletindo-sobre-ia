import { aleatorio, naveDesignada } from './aleatorio.js'; // Alterado de 'nome' para 'naveDesignada'
import { perguntas } from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// Função de início do jogo agora lida com o novo contexto
botaoIniciar.addEventListener('click', iniciaJogo);
botaoJogarNovamente.addEventListener("click", jogaNovamente); // Adicionado aqui para escuta única

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    // Esconde a tela inicial e mostra a tela do jogo
    telaInicial.style.display = 'none';
    caixaResultado.classList.remove("mostrar");
    caixaPerguntas.textContent = ""; // Limpa o conteúdo da pergunta
    caixaAlternativas.textContent = ""; // Limpa o conteúdo das alternativas
    
    // Assegura que o texto da nave é inserido antes de mostrar a primeira pergunta
    substituiNaveDesignada(); 
    
    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    // Garantindo que a classe mostrar é removida/adicionada conforme o fluxo
    caixaPerguntas.classList.add("mostrar");
    caixaAlternativas.classList.add("mostrar");

    // O texto da nave deve ter sido substituído na função substituiNaveDesignada
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    
    // Decide a próxima pergunta ou o resultado final
    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
    } else {
        // Se 'proxima' não estiver definida, significa que é a última pergunta
        mostraResultado();
        return;
    }
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    
    // Novo texto final para o contexto espacial
    textoResultado.textContent = `Após a Missão Éden, a tripulação da nave ${naveDesignada} concluiu: ${historiaFinal.trim()}`;
    
    caixaResultado.classList.add("mostrar");
}

function jogaNovamente() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    telaInicial.style.display = 'block'; // Volta para a tela inicial
    
    // Reexecuta a substituição para garantir que o nome da nave (se houver variação futura) seja atualizado
    // Ou simplesmente para limpar qualquer alteração indesejada antes de recomeçar
    substituiNaveDesignada(); 
}

// Nova função para substituir a designação da nave no texto das perguntas
function substituiNaveDesignada() {
    // Itera sobre todas as perguntas para substituir o marcador de posição ${naveDesignada} pelo valor real
    for (const pergunta of perguntas) {
        // Usa uma expressão regular global para garantir a substituição em todos os lugares
        // Nota: O seu perguntas.js anterior usava ${naveDesignada}, então vamos usar essa sintaxe de string literal para o replace.
        pergunta.enunciado = pergunta.enunciado.replace(/\$\{naveDesignada\}/g, naveDesignada);
    }
}

// Inicializa a substituição assim que o script é carregado
substituiNaveDesignada();