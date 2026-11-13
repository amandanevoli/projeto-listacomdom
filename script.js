const Cadastrar =
document.getElementById("Cadastrar");

const listaFilmes =
document.getElementById("listaFilmes");

const botaoRemover = document.createElement("button");
botaoRemover.textContent = "Remover";
botaoRemover.classList.add("button-remover");

Cadastrar.addEventListener(
    "click",
    cadastrarFilme
);

botaoRemover.addEventListener("click", function () {
    card.remove();
});


function cadastrarFilme() {
    const genero = document.getElementById("genero").value;
    const nome = document.getElementById("nome").value;
    const imagem = document.getElementById("imagem").value;

    if (genero === "" || nome === "" || imagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const card = document.createElement("div");
    card.classList.add("card");

    const foto = document.createElement("img");
    foto.src = imagem;

    foto.onerror = function () {
        this.src = "erro.png";
    };

    const titulo = document.createElement("h3");
    titulo.textContent = nome;

    const generoTexto = document.createElement("p");
    generoTexto.textContent = genero;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("button-remover");

    botaoRemover.addEventListener("click", function () {
        card.remove();
    });

    card.appendChild(foto);
    card.appendChild(titulo);
    card.appendChild(generoTexto);
    card.appendChild(botaoRemover);

    listaFilmes.appendChild(card);

    document.getElementById("genero").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("imagem").value = "";
}