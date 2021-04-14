function area(largura, largura){
  const area = largura * largura 
  if(area > 20){
    console.log(`Valor acima do permitido: ${area}`)
  }else {
    return area
  }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 2, 5, 6 ,8)) // Os dois primeiros número serão válidos e os demais ignorados
console.log(area(5, 5)) // Retorna o resultado + o undefined