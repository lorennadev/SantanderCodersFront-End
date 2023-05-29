// Fluxograma
/*
obter a idade da pessoa=> idade >= 18? > Se sim> você é maior de idade
                                        Se não > vocÊ é menor de idade
        

*/

const idade = 2;

if (idade >= 18 ) {
    console.log('você é maior de idade!')
} else {
    console.log('você é menor de idade!')
}

// Se media >= 7, aprovado
// Se media < 7 e media >= 5, recuperação 
// Se media < 5, reprovado

console.clear() //Limpando saídas anteriores

let media = 3

if (media >= 7) {
    console.log('Aprovada(o)')
} else if (media >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovada(o)')
}

console.clear()

var x = 10;
console.log(x + y);
let y = 15;