let operando1 = parseInt(prompt("Por favor, introduce el primer operando (entero):"));
let operando2 = parseInt(prompt("Por favor, introduce el segundo operando (entero):"));
let signoAritmetico = prompt("Por favor, introduce el signo aritmético (+, -, *, /, ^ o %):");

let resultado;

switch (signoAritmetico) {
    case "+":
        resultado = operando1 + operando2;
        break;
    case "-":
        resultado = operando1 - operando2;
        break;
    case "*":
        resultado = operando1 * operando2;
        break;
    case "/":
        resultado = operando1 / operando2;
        break;
    case "^":
        resultado = Math.pow(operando1, operando2);
        break;
    case "%":
        resultado = operando1 % operando2;
        break;
    default:
        alert("Signo aritmético no válido. Por favor, introduce un signo válido.");
}

if (resultado !== undefined) {
    alert("El resultado de la operación es: " + resultado);
}
