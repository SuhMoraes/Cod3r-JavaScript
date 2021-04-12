function soBoaNoticia(nota){
  if(nota >= 7){
    console.log( 'Aprovado', nota)
  } 
}

soBoaNoticia(8)
soBoaNoticia(6)

function seForVeradadeEuFalo(valor){
  if(valor){
    console.log('É verdade ...', valor)
  }
}

seForVeradadeEuFalo();
seForVeradadeEuFalo(null);
seForVeradadeEuFalo(undefined);
seForVeradadeEuFalo(NaN);
seForVeradadeEuFalo('');
seForVeradadeEuFalo(0);
seForVeradadeEuFalo(-1);
seForVeradadeEuFalo(' ');
seForVeradadeEuFalo([]);
seForVeradadeEuFalo({});
seForVeradadeEuFalo('?');
