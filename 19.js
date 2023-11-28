let numeros = ["10", "5", "4","3"];
console.log(numeros);

numeros = numeros.map(function(numString,indice, arreglo){
    console.log(this);
    return parseInt(numString);
},{});

console.log(numeros);