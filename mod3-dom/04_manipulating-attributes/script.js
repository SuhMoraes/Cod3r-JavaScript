function clicou() {
    const input = document.querySelector("input");
    const senha = document.querySelector(".password");


    console.log(input.getAttribute('placeholder'));

    if(input.hasAttribute( 'placeholder')){
        console.log("Tem placeholder")
    }

    input.setAttribute('placeholder', "Valor alterado");

    senha.setAttribute('type', 'text');

    


}