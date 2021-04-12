function tratarErroELancar(erro) {
  throw new Error('Erro sendo resolvido pelo nossos desenvolvedores!')
}

function imprimirNomeGritando(obj){
  
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch(e){
    tratarErroELancar(e)
  } finally {
    console.log('Olá!')
  }
}

const obj = {nome: 'Ricardo'}
imprimirNomeGritando(obj)