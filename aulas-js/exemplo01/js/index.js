const carro = {
    marca: "ford",
    modelo: "KA",
    ano: 2015,
    placa: "ABC1E34",

    buzina: function(){
        alert('Biiiiiiiiiiiii')
    },

    completo: function() {
        return "A marca é " + this.marca + " e o modelo é " + this.modelo + " do ano " + this.ano + ", sua placa é " + this.placa
    }
}

console.log(carro.completo());

