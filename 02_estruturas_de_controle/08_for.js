let contador = 0 // Declaração de uma variável
while(contador <= 10){ // expressão
  console.log(`contador = ${contador}`)
  contador++ //Incremento
}

for( let i = 0; i <= 10; i++){
       // ^--------^------^----------Declaração de uma variável- Controla o laço
                 //^------^----------Expressão
                        //^---------Incremento
  console.log(`i = ${i}`)
}

// Exemplo com Array- Navegando do primeiro ao último elemento 
const notas = [ 7.0, 8.2, 5.0, 9]
for(let i = 0; i < notas.length; i++){
  console.log(`nota = ${notas[i]}`)
}