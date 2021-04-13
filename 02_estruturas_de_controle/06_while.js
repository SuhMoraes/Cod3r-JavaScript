function getInteiroAleatorioEntre(min, max){
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor)
}

let opcao = 0 

// Não tem uma quantidade determinada de repetições
while (opcao != -1){ // expressão estiver falsa, ele sai do laço
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida de forma aleatória foi ${opcao}.`)
}

console.log('Até a próxima!')