let arreglo = ["ruby", "python", "java"];

//indexOf -> === -> posicion
//includes -> === -> true|false

//find -> funcion prueba -> elemento encontrado
//findIndex -> funcion prueba -> posicion
//some -> funcion prueba -> true|false
console.log(arreglo.indexOf("ruby"));
console.log(arreglo.includes("ruby"));

console.log(arreglo.findIndex(function(elemento, posicion, arreglo){
    return elemento === "java"
}))

let respuesta = arreglo.some(function(elemento,posicion, arreglo){
    return elemento === "java";
});

console.log(respuesta);