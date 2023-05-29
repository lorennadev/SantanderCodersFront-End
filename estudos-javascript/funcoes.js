// FUNÇÕES

// função de saudação 

function saudacao() {
    console.log('Olá, seja bem-vindo(a) ao nosso curso básico de JavaScript!')
} // definição da função.

// para executar precisa sr chamada pelo nome
saudacao()
console.clear()

// Como enviar parametros para as funções
const input = require("readline-sync")

function saudacao(nome='aluno', curso='JavaScript') {
    console.log(`Olá ${nome}! Seja bem-vindo(a) ao nosso curso de ${curso}!`)
}

saudacao('Lorena')
console.clear()

// Retorno da função 

//Está imprimindo mas não retornando

function soma(numero1, numero2) {
    return numero1 + numero2   // depois do return a função encerra, não imprime mais nada.
}

const resultado = soma(10, 20)

console.log(resultado)

console.clear()


function maiorDoQue50(numero) {
    if(numero > 50) {
        return true
    }
    return false
}

const bool = maiorDoQue50(55)

console.log(bool)
