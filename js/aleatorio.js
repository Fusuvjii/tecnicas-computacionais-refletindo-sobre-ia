// Lista de naves espaciais designadas para a Missão Éden
const naves = ["Atlas-I", "Ômega-7", "Érebo", "Nova Aurora", "Vigia Profundo", "Horizonte Distante", "Stardust"];

/**
 * Seleciona um elemento aleatório de uma lista fornecida.
 * @param {Array} lista - A lista de elementos para escolha.
 * @returns {*} O elemento selecionado aleatoriamente.
 */
export function aleatorio (lista){
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

// Seleciona a nave espacial designada para a sua missão
export const naveDesignada = aleatorio(naves);