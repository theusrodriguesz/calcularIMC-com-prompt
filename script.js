var altura = prompt("Digite sua altura");
var peso = prompt("Digite seu peso");

altura = parseFloat(altura);
peso = parseFloat(peso);

if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, digite valores válidos para altura e peso.");
} else {
    let calcular = peso / (altura * altura);

    alert("Seu IMC é: " + calcular.toFixed(2));

    if (calcular < 18.5) {
        alert("Você está abaixo do peso.");
    } else if (calcular < 24.9) {
        alert("Seu peso está normal.");
    } else if (calcular < 29.9) {
        alert("Você está com sobrepeso.");
    } else if (calcular < 34.9) {
        alert("Você está com obesidade grau I.");
    } else if (calcular < 39.9) {
        alert("Você está com obesidade grau II.");
    } else {
        alert("Você está com obesidade grau III.");
    }
}