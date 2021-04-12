// Undefined 
let valor1 // Valor declarado, mas não iniciado.

console.log(valor1);
//console.log(valor2); // valor2 is not defined - não foi declarado

valor = null; // iniciado, mas sem valor/sem referência
console.log(valor);

const produto = {}
console.log(produto.preco); // O preço não está definido = undefined
console.log(produto);

produto.preco = 3.50;
console.log(produto.preco);

produto.preco = null // sem preço 
console.log(!!produto.preco);
console.log(produto)
