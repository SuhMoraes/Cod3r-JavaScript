const pessoa = {
  saudacao: 'Bom dia!',
  falar(){
    console.log(this.saudacao);
  }
}
pessoa.falar()

function Pessoa(){
  this.idade = 0

  const self = this

  setInterval(function (){
    self.idade++
    console.log(self.idade);
  }, /*this.bind()*/1000)
}

/*Istanciar o objeto Pessoa*/
new Pessoa 