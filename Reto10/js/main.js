let numeroVentasStr = prompt("Por favor, introduce el número de ventas:");
let numeroVentas = parseInt(numeroVentasStr);

let sumaVentas = 0;

for (let i = 1; i <= numeroVentas; i++) {
    let ventaStr = prompt("Introduce la venta " + i + ":");
    let venta = parseInt(ventaStr);

    if (!isNaN(venta)) {
        sumaVentas += venta;
    } else {
        console.log("Venta no válida. Por favor, introduce un número válido.");
        i--;
    }
}

console.log("La suma total de las ventas es: " + sumaVentas);


// ESTA MAL
