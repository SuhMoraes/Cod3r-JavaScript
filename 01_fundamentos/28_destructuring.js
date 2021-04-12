// Destructuring 
const pessoa ={
  nome: 'Ana',
  idade: 21,
  endereco: {
    lougadouro: 'Rua Estrela',
    numero: 103
  }
}

// extrair nome e idade
const { nome, idade } = pessoa;
console.log(nome, idade);

// Mudar nome da variável e extrair o conteúdo da variável
const { nome: n, idade: i } = pessoa;
console.log(n, i);

// Extrair um atributo inexistente dentro do método
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

// Extrair um objeto, dentro do objeto.
const {endereco: {lougadouro, numero}} = pessoa;
console.log(lougadouro,numero);

