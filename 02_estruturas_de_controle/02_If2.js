function teste1(num){
  if(num > 7)
    console.log(num);

    // Sempre será executado sendo verdadeiro ou falso
    console.log('Final')
}
teste1(6);
teste1(8);

function teste2(num){
  if(num > 7); //; ----> Não utilize ';' na estrutura do If ( Estruturas de Controle)
  {
    console.log(num)
  }
}

teste2(5);
teste2(8);