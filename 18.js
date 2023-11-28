let lenguajes = ["ruby", "php","javascript","python"];

/*for(let i=0; i<lenguajes.length; i++){
    console.log(lenguajes[i])
} */

lenguajes.forEach(function(lenguaje, indice, arreglo){
    console.log(lenguaje, indice, arreglo)
});