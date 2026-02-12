const carros = [" Gol", " Fusca", " Brasilia", " Del Rey", " Chevette"];
var tamanho = carros.length;

for (let i = 0; i < tamanho; i++){
    document.getElementById("teste").innerHTML += carros[i] + " - ";
}