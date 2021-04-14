function soma(){
  let soma = 0
  for(i in arguments) {
    soma += arguments[i]
  }
  return soma
}

console.log(soma())
console.log(soma(2))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1, 2, "Teste")) // Soma os número e concatena a string
console.log(soma('a', 'b', 'c', 'd', 'e', 'f'))// Concatena as Strings
