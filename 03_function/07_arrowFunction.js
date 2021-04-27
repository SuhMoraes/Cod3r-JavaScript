let dobro = function (a) {
  return 2 * a
}
dobro = (a) => {
  return 2 * a
}

/*Sintaxe mais reduzida*/
dobro = a => 2 * a // return implicito
console.log(dobro(2))

let ola = function (){
  return 'Ola'
}

ola = () => 'Olá'

ola = _ => 'Olá'//possui um param
console.log(ola())