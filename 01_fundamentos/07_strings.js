const escola = "Cod3r";

console.log(escola.charAt(2)) // Mostra o caractere que está no índice
console.log(escola.charAt(5)) 

console.log(escola.charCodeAt(3))//Mostra o código relacionado ao Unicode
console.log(escola.indexOf('3')) //Retorna o íncide associado ao dígito 3

console.log(escola.substring(1))// Vai apartir do índice  1
console.log(escola.substring(0, 3)) // Vai do índice 0 até 0 3 em incluí-lo

console.log('Escola '.concat(escola).concat("!")) //Concatena
console.log('Escola '+ escola +'!') //Concatena

console.log(escola.replace(3, 'e')) //Replace = Substituí o caracter

console.log('Ana, Maria, Pedro'.split(',')) //Split -> converte a função String em Array
console.log('Ana, Maria, Pedro') //


