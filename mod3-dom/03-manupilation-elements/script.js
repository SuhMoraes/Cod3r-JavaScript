function clicou() {
  const teste = document.querySelector("#test");
  const ul = teste.querySelector("ul");

  ul.innerHTML += "<li> Item alterando</li>";

  ul.children[0].append("(alterado)");

  let newLi = document.createElement("li");
  newLi.innerText = "Mais um item adicionado";

  ul.appendChild(newLi);

  ul.prepend(newLi);

  ul.after("Texto qualquer");

  const newButton = document.createElement('button');

  newButton.innerHTML = "Botão";

  ul.before(newButton);

  let newUl = document.createElement('ul');

  for (let i = 0; i < 5; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = "Inserindo texto " + i;
    newUl.append(newLi);
  }

  ul.after(newUl);
}
