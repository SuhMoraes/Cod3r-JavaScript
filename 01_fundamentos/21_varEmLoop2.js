// Diferenças entre Var e Let
const funcs = []

for (var i = 0; i < 10; i++){
  funcs.push(function(){
    console.log(i)
  })
}
/* Var como não tem escopo de bloco, é impresso a variável de valor 10*/
funcs[2]();
funcs[8]();