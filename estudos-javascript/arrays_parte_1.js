// > ARRAYS


/* Problema:
const nome = 'Lorena'
const idade = 25
const altura = 1.65 
const trabalha = true
*/

// Como criar um array?

let arr = ['Lorena', 25, 1.65, true]

console.log(arr)

console.clear()

// Como acessar um array

console.log('Primeiro elemento:', arr[0])
console.log('Segundo elemento:', arr[1])
console.log('Terceiro elemento:', arr[2])
console.log('Quarto elemento:', arr[3])

// Como acessar o tamanho do array

console.log('Tamanho do array: ', arr.length)

console.clear()

//Percorrendo arrays
//Primeiro método
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.clear()

//Segundo método

for (let elemento of arr) /* A cada interação quero que pegue um elemento do array*/ {
    console.log(elemento)
}
console.clear()

// Terceiro método

for (let indice in arr) /* percorre o Indice do Array */{
    console.log(indice, arr[indice])
}