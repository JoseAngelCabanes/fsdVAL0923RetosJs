let contraseñaCorrecta = "miContraseña";
let intentos = 3;

while (intentos > 0) {
    let contraseñaIngresada = prompt("Por favor, introduce la contraseña (" + intentos + " intentos restantes):");

    if (contraseñaIngresada === contraseñaCorrecta) {
        console.log("¡Enhorabuena! Has ingresado la contraseña correcta.");
        break;
    } else {
        intentos--;
        if (intentos > 0) {
            console.log("Contraseña incorrecta. Inténtalo de nuevo.");
        } else {
            console.log("Has agotado tus intentos. La contraseña era incorrecta.");
        }
    }
}
