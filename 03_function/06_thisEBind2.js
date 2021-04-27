const pessoa = {
  saudacao: 'Bom dia!',
  falar(){
    console.log(this.saudacao);
  }
}
pessoa.falar()

const falar = pessoa.falar
falar() //Conflito de paradigmas: funcional e OO // o objeto não é impresso na função

const falarDePessoa = pessoa.falar.bind(pessoa) // Bind função que liga o objeto 
falarDePessoa() // Quando a função é chamada, imprime o objeto pessoa
