// El tipo de variable bool , boolean, boleana

// PAra hacer el curso de FOAP, necesitas estar en el paro
let estoyParo = false;

if (estoyParo) {
    console.log("Puedes hacer el curso del FOAP");
}
else {
    console.log("Vuelve cuando te quedes sin trabajo...")
}

// Cypher tiene 100 de vida y recibe un disparo

let vida = 100;
let disparo = 100;

vida = vida - disparo;

if (vida == 0) {
    console.log("Cypher ha muerto")
}
else {
    console.log("A Cyphe le quedan " + vida + " puntos de vida.");
}