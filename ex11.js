/**
 * Si una variable no tiene valor, esta se evalua como false. Pero también sucede en muchos otros casos: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 * 
 */

// Pregunta 1: Contesta y razona: qué línea de código se va a ejecutar ? Ejecuta el código. Qué línea se ha ejecutado finalmente?
// Se ha ejecutado la línea 16 porque la variable está bien definida, pero está en blanco

let nombre = ""; // Un formulario nos pide que pongamos nuestro nombre

if (nombre) {
    console.log("tu nombre es " + nombre);
}

else {
    console.log("Me parece que te has olvidado de poner tu nombre...")
}

// Pregunta 2: Modifica el valor de las variables adecuadamente para que se muestre el siguiente console.log

let destino = "Venecia"; // donde me voy a de viaje?
let presupuesto = 2500; // cuanto dinero tengo para ello?
let estoyPreparado = true; // lo tengo todo ya listo ?

/**NO MODIFIQUES A PARTIR DE AQUI */

if (destino && presupuesto && estoyPreparado) {
    console.log("Me voy de viaje a " + destino + " y me voy a gastar " + presupuesto + " €");
}