const listaCompras = ['Arroz', 'Feijão', 'Macarrão', 'Óleo', 'Pipoca']

// Imprime os índices do array
for (let i in listaCompras) { // use o let para que o indice esteja dentro do laço
  console.log(i, listaCompras[i])
}

const pessoa = { 
  nome: 'Sabrina',
  sobrenome: 'Moraes',
  idade: 30,
  peso: 70
}

for(let atributo in pessoa) { // use o LET para que o atributo esteja dentro de objeto 
  console.log(`${atributo} = ${pessoa[atributo]}`)
}