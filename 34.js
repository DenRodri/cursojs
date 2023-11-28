class Curso{
  title = "Hola";

  inscribir = (nombre) => this.nombre = nombre;
}

let c = new Curso();
c.inscribir("Uriel");

console.log(c.nombre);