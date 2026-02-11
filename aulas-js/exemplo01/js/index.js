function verificaCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase()

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        case "verde":
            document.body.style.backgroundColor = "green";
            break;
        default:
            document.getElementById("teste").innerHTML = "Nenhuma cor disponivel para " + cor;
    }
}

