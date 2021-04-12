function compras(freela1, freela2) {
  const comprarTenis = freela1 || freela2; 
  const viajar = freela1 && freela2;
  //const comerFora = !!(freela1 ^ freela2); // Ou exclusivo
  const comerFora = freela1 != freela2;
  const ficarEmCasa = !comprarTenis // Operador unário

  return {comprarTenis, viajar, comerFora, ficarEmCasa};
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));