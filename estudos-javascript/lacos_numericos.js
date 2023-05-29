// Laços numéricos | Estrutura 'for'

const input = require('readline-sync')

//O Problema

/*
const nota1 =  Number(input.question('Informe a nota 1: '))
const nota2 =  Number(input.question('Informe a nota 2: '))
const nota3 =  Number(input.question('Informe a nota 3: '))

let media = (nota1 + nota2 + nota3) / 3

console.log(media)
*/

//Acumulador

let acumulador = 0

acumulador += 10  // é igual a : acumulador += 10 | no caso de subtração -=10

acumulador = acumulador + 2  // += por extenso

acumulador++ // soma uma unidade na variavél 

console.log(acumulador)

console.clear()


//Estrutura for

//laço é estrutura. iteração é a volta que é dada no laço

for (let i = 0; i <= 4; i++){
// for (inicializa var; condição de parada; soma a cada repetição = passo)
    console.log('Repetição', i)
}
console.clear()

for (let i = 10; i <= 12; i++){
    console.log('Repetição', i)
}
console.clear()

for(let i = 12; i > 8; i--) {
    console.log('Repetição', i)
}
console.clear()

//Resolvendo o problema inicial

let nota;
let soma = 0;

for( let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Informe a nota ${i} do aluno: `)) //Para colocar uma variavél é usado o template string, observe que o conteudo está dentro de crase e a variável em &{}
    soma += nota
}

console.log(`A média do aluno é ${soma / 3}.`)