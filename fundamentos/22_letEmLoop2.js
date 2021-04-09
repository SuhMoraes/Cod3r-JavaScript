// Diferenças entre Var e Let
const funcs = []

for (let i = 0; i < 10; i++){
  funcs.push(function(){
    console.log(i)
  })
}
// A variável LET respeita o escopo de bloco, pois é uma variável que possui memória
funcs[2]();
funcs[8]();
funcs[0]();