let objeto = {
  demo: function(){
    console.log(this);
  }
}

objeto.demo(); // El objeto que ejecuta la funcion

let estudiante = {
  nombre: "Uriel",
  saludar: function(){
    console.log("Hola soy " + this.nombre);
  }
}

let f = estudiante.saludar;
setTimeout(estudiante.saludar, 100);

