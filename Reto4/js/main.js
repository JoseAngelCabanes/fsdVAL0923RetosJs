let radioStr = prompt("Por favor, introduce el valor del radio del círculo:");
let radio = parseDuble(radioStr);

let area = Math.PI * Math.pow(radio, 2);

console.log("El área del círculo con radio " + radio + " es: " + area);
