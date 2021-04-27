let comparaComThis = function(param){
  console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // Associei o compra com this com a função bind()
comparaComThis(global)
comparaComThis(obj) // Aponta para o objeto por causa do Bind()

// Arrow funtcion 
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(this) // true - pois está no module.exports

comparaComThisArrow = comparaComThisArrow.bind(obj) 
comparaComThisArrow(obj) // Arrow function não vai alterar a função bind()
comparaComThisArrow(module.exports)

