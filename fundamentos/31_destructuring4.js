// destructuring de array dentro de um parametro de uma função
function rand ([min = 0, max = 1000]){
  if (min > max) [min, max] = [max, min]
  const valor =  Math.random() * (max - min) + (min)
  return Math.floor(valor)
}

console.log(rand([50, 40])); // Ficará navegando entre 50 e 40
console.log(rand([992])); // Ficará navegando entre 0 e 992
console.log(rand([, 10])); // Ficará navegando entre 0 e 10
console.log(rand([])); // Ficará navegando entre 0 e 1000