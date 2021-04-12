// A varíavel VAR --> Fica vísivel em qualquer lugar do bloco
{
  {
    {
      {
        var sera = 'Será?'
      }
    }
    console.log(sera);
  }
} 

function test(){
  var local = 123
  console.log(local)
}

test()
console.log(local)
