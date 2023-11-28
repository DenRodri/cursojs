function cuadrado(numero=20){
    console.log(numero);
    return numero * numero;
}

let resultado = cuadrado();
console.log(resultado);

function saludar(apellido,nombre=""){
    console.log(nombre, apellido);
}

saludar("Hernandez")

function sumaTodos(){
let suma=0;
for(let i=0;i < arguments.length;i++){
    suma += arguments[i];  
}
console.log(suma)
}

sumaTodos(1,2,3,4, 10, 2, 3, 4, 5)