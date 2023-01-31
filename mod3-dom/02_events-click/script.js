
function clicou(clicou) {
    alert("Clicou no botão");
}

let botao = document.querySelector(".botao");

botao.addEventListener("click", () => {
    clicou();
})