//Booleanos resulta true or false

/*
igualdade: == ou ===
desigualdade != ou !==
maior que >
maior ou igual >=
menor que <
menor ou ihual <=
*/

const numero = 10;

console.log(numero == 10);
console.log(numero > 20);

// === !== compara conteúdo e tipo. indicado utilizar sempre === !== para evitar bugs em operações aritiméticas;

console.clear() // limpa o console


// conjunções lógicas

// AND => &&

let idade = 26
let cnh = true

const possoDirigir = idade >= 18 && cnh === true
console.log(possoDirigir)

// OR => ||

// NOT => !

const estouGostandoDeJS = false;

console.log(!estouGostandoDeJS) // a exclamação na frente reverte  resultado