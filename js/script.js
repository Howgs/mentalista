var numeroSorteado = parseInt(Math.random() * 11);



function chutar() {
    var resultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);

    if(chute == numeroSorteado) {
        resultado.innerHTML = "Você acertou!";
    }
    
    else if (chute > 10 || chute < 0) {
        resultado.innerHTML = "Digite um Numero de 0 a 10"
    }
    else {
        resultado.innerHTML = "Você Errou! O Numero era " + numeroSorteado
    }
}











