let nombres = ["Uriel", "Cody"];

let html = nombres.reduce(function(acc, nombre){
    return acc + "<li>" + nombre + "</li>"
},"");

console.log(html)