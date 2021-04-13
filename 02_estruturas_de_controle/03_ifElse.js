const imprimiNota =  function (nota){
  if(nota >= 7) {
    console.log('Aprovado!')
  } else {
    console.log('Reprovado!')
  }
}

imprimiNota(10);
imprimiNota(5);
imprimiNota('Epa!'); // erro da linguagem fracamente tipada.