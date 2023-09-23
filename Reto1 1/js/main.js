let diaSemana = prompt("Por favor, introduce un día de la semana:");

diaSemana = diaSemana.toLowerCase();

switch (diaSemana) {
    case "lunes":
    case "martes":
    case "miércoles":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Es un día laboral.");
        break;
    case "sábado":
    case "sabado":
    case "domingo":
        console.log("No es un día laboral.");
        break;
    default:
        console.log("Día no válido. Por favor, introduce un día de la semana válido.");
}
