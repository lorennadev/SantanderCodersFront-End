// > Arrays - parte 2 - métodos de arrays

let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

// Fatiamento
console.log(arr1.slice(0, 2)) // slice(indice inicio, indice final) o indice final não esta incluso nesse caso
console.log(arr1.slice(2)) // somente um paramatro é considerado o inicio e segue até o fim do array
console.clear()

// Adicionando elemetos: push | unshift
console.log(`Antes de adicionar:`, arr2)
arr2.push(10, 20, 30)
arr2.push(40) // método push sempre inclui no final do array
console.log(`Depois de adicionar:`, arr2)

console.log('Antes de adicionar com unshift:', arr2)
arr2.unshift(0) // sempre adicona no inicio 
console.clear()

// Removendo elementos: pop | shift 
console.log('Antes de remover com o pop e shift:', arr2)

const elementoRemovido = arr2.pop() // remove por padrão o ultimo elemento do array
const elementoRemovidoShift = arr2.shift() // remove por padrão o primeiro elemento do array

console.log('Depois de remover com pop e shift:', arr2)
console.log('O elemento removido foi:', elementoRemovido)
console.log('Elemento removido com Shift', elementoRemovidoShift)

console.clear()

// Conectando arrays: concat
console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))

console.clear()

// Bucando elementos: indexOf | lastIndexOf
console.log(arr1)
let indiceDoElemento34 = arr1.indexOf(34) // se é procurado um elemento que não existe retorna -1, se tiver dois iguais, será indicado o indice do primeiro
console.log(indiceDoElemento34)


let arr3 = [1, 2, 3, 3, 5, 3]
console.log(arr3.lastIndexOf(3))

console.clear()

// Descobrindo a existencia de um elemento: Include
console.log(arr1)

console.log(arr1.includes(10)) // pergunta se esse array incluí o valor 10


// Invertendo arrays: reverse

console.log('arr1 normal:', arr1)

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido:', arr1)