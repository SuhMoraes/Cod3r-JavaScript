// destructuring in function dentro de objeto
function rand ({min = 0, max = 1000}){
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = { max: 50, min: 40}
console.log(rand(obj)); // Ficará navegando entre 50 e 40
console.log(rand({min: 955})); // Ficará navegando entre 0 e 955
console.log(rand({})) // Ficará navegando entre 0 e 1000
