const valores = [7.7 , 8.2, 3.3, 9.2];
console.log(valores[0],valores[1],valores[2],valores[3]);
console.log(valores[4]); // Não gera erro -> UNDEFINED

valores[4] = 10; // Adicionando valores no indice 4
console.log(valores);

valores[20] = 12.1;
console.log(valores);// <15 empty items> ====> 15 itens vazios

console.log(valores.length); //Mostra quantos elementos tem na Array

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop()); // Retira e imprime o último elemento do Array
console.log(valores);

delete valores[0] // deleta o elemento do indice
console.log(valores);

console.log(typeof valores);// Tipo do identificador ou varíavel