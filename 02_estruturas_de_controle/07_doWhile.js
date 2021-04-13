function getInteiroAleatorioEntre(min, max){
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}


let opcao = 0

do { // Executa o bloco e só então, deve decidir se continua ou não
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`A opção escolhida foi ${opcao}.`)

  // é a única estrutura que fica depois do bloco.
} while (opcao != -1) 

console.log('Até a próxima!')
