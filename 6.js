// Imprimir numeros del 1 al 10

/*
1. Introduccion inicial
2. Condicion
3. Instruccion despues de cada iteracion
*/

for(let i = 1; i <= 10; i++){
    console.log(i);
    if(i % 2 != 0){ continue; }

    console.log("Es Par");
}

let i = 1;
while(i <= 10){
    console.log(i);
    i++;

}

do{
    console.log("ejecucion");
}while(prompt());