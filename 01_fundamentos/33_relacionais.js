console.log('01)', '1' == 1); // Igual
console.log('02)', '1' === 1); // Estritamente igual
console.log('03)', '3' != 3); // diferente
console.log('04)', '3' !== 3); // Estritamente diferente

console.log('05)', 3 < 2 ) // Menor
console.log('06)', 3 > 2 ) // Maior
console.log('07)', 3 <= 2 ) // Menor igual
console.log('08)', 3 >= 2 ) // Maior igual

// Data

const d1 = new Date();
const d2 = new Date();
console.log('09)', d1 == d2);
console.log('10)', d1 === d2);
console.log('11)', d1.getTime() === d2.getTime());

console.log('13)', undefined == null);
console.log('14)', undefined === null);
