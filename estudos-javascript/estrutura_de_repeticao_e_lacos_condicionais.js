//Sortear um número
//Obter um número do usuário
//Número obtido é diferente do desejado?
// se sim, obtem outro número
// se não print "Você acertou o número!"

// > Laços condicionais

// while


// npm install readline-sync = usado para instalar no arquivo a biblioteca que funciona para receber numero de usuário
/*
const input = require("readline-sync") // importamos a biblioteca para o programa

const numero_sorteado = 5;

const numero = Number(input.question('Escolha um numero: ')) // number converte para número

console.log(numero, typeof numero)

console.clear()
*/

// praticando While 

const input = require("readline-sync") // importamos a biblioteca para o programa

const numero_sorteado = Number(5);

let numero = Number( input.question('Escolha um numero: '))

/* Usando if não repete até que o usuário acerte
if( numero1 === numero_sorteado) {
    console.log('Você Acertou!')
} else {
    console.log('Você errou!')
}
*/

while (numero !== numero_sorteado) {
    console.log('Você errou! Tente novamente: ')
// se parar aqui acontece um loop infinito
    numero = Number( input.question('Escolha um numero: '))
//isso resolve a questão

}
//quando você acerta ele encerra, para dar um resultado, colocar fora do código while
console.log('Você acertou!!!')
