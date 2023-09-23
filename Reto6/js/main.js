const IVA = 0.21;

let precioStr = prompt("Por favor, introduce el precio del producto:");
let precio = parseFloat(precioStr);

let precioFinal = precio + (precio * IVA);

console.log("El precio final del producto con IVA del 21% es: " + precioFinal.toFixed(2));
