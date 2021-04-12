// Destructuring in array

const [a] = [10];
console.log(a);

//criando várias variáveis através de uma única chamada
const [n1, ,n3, ,n5, n6 = 2] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6);

const [,[, nota, n2]] = [[8, 2, 1], [2, 5 ,3]]
console.log(nota, n2);