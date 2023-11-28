// Funcion pura: No produce efectos secundarios
let edades = [20];

function modificador(edades){
   let copia = [...edades]; // Genero una copia
   copia[0] = 25; // Modifico la copia y no el valor original
   return copia; // Para comunicar los cambios con el exterior
}

console.log(edades);
modificador(edades);

console.log(edades);

function build(){
    return function(){ console.log("Hola")};
}

let f = build();
f();
