let numeros = [8, 3, 4, 10, 5, 3];

let nuevoArreglo = numeros.filter(function(numero){
    return numero % 2;
});

console.log(nuevoArreglo);