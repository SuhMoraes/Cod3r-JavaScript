//Criei um array de números
let arrayNumeros = [1, 2, 3, 4, 5]
 
//Criei uma função que será passada como a callback do forEach
//Observe deve obedecer a ordem da assinatura das callbacks do forEach: 
//Primeiro o valor corrente (numero a ser dobrado), depois o índice(index do array)
//Observe também você só precisa passar os parâmetros que for usar na função.
let dobro = function (numero, indice) {
    //A função apenas imprimirá o índice do elemento + 1 e o seu valor corrente * 2. 
    console.log(` ${indice+1}- O dobro do elemento ${indice+1} é igual a ${numero*2})`)
}
 
//Aqui ele chama o forEach à partir do array e passando a callback como parâmetro.
arrayNumeros.forEach(dobro)