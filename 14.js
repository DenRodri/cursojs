/*
Debe ser posible retornarlo
Debe ser posible asignarlo a una variable
Debe ser posible enviarlo como argumento

First class object
*/

function sumaTodos(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]
    }
    return suma;
}

function sumaTodosAlt(){
    return Array.from(arguments).reduce((acc,arguments) => arguments + acc, 0);
}

console.log(sumaTodosAlt(1,2,3,4))