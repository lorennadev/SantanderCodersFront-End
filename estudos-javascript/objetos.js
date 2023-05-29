// OBJETOS

//Acessa elementos por chaves definidas para eles, é um assunto muito amplo, veremos apenas uma introdução 




//Como criar um objeto no javascript?
let pessoa = {
    nome: 'Lorena',
    idade: 26,
}

console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa['nome']) // se a chave for entre aspas precisa ser assim como 'nome-da-pessoa'
console.log(pessoa.idade)
console.clear()

// Como adicionar um par chave-valor?

pessoa.altura = 1.65

console.log(pessoa)

//Como remover um par chave-valor?
delete pessoa.altura
console.log(pessoa)
console.clear

//Como percorrer? // for in
for( let chave in pessoa) {
    console.log(chave)
}