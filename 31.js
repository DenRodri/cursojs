/*
  - Tienen una sintaxis mas corta que la declaracion con function
  - Heredan el valor de this del contexto en el que fueron creadas, y no se reasigna
*/

let estudiante = {
  nombre: "Uriel",
  saludar: () => { console.log("Hola soy " + this.nombre); },
  saludarAlt: function(){
    console.log("Hola soy " + this.nombre);
  }
}

estudiante.saludar(); // Hola soy undefined
estudiante.saludarAlt(); // Hola soy Uriel

setTimeout(e.saludar, 100)