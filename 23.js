// Iterable
// Spread syntax (...)

let arreglo = [1, 2, 3];
let nombre = "Uriel";

// Rest parameters (...)

function promedio(nombre, ...calificaciones){
    console.log(arguments);
    console.log(nombre, calificaciones);
}
promedio("Uriel", 1, 10, 5, 4, 20)