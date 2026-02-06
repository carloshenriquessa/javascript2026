function eventoClick(){
    //alert("Acionou um evento de click!")
    document.body.style.backgroundColor = "darkblue";
}

function eventoDblClick() {
    alert("Evento de click duplo!");
}

function viraSky() {
    let div = document.getElementById("teste")
    div.style.backgroundColor = "skyblue";
}

function viraAzul() {
    let div = document.getElementById("teste")
    div.style.backgroundColor = "blue";
}

function mudou() {
    console.log('Mudou');
}

function teclaPrecssionada() {
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}