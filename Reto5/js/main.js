let numeroStr = prompt("Por favor, introduce un número:");
let numero = parseInt(numeroStr);

if (numero % 2 === 0) {
    console.log("El número " + numero + " es divisible por 2 (resto = 0).");
} else {
    console.log("El número " + numero + " no es divisible por 2 (resto distinto de 0).");
}
