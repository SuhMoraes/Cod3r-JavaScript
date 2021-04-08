isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

isAtivo = 0;
console.log(!!isAtivo);

console.log('OS VERADEIROS...');
console.log(!!3);
console.log(!!-1);
console.log(!! ' '); // Espaço Vazio
console.log(!![]);  //Array vazio 
console.log(!!{}) // Objeto Literal
console.log(!!Infinity);
console.log(!!(IisAtivo = true));

console.log('OS FALSOS...');
console.log(!!0);
console.log(!!''); //String vazia
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));


console.log('PARA FINALIZAR...');
console.log(('' || null || 0 || 'olá')); // só imprime o VERDADEIRO

let nome = 'Mario'
console.log(nome || 'Desconhecido'); //Imprime o dado verdadeiro

