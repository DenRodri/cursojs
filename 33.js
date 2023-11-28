class Curso{
  constructor(titulo){
    this.titulo = titulo;
  }
  inscribir(){
    console.log("Inscrito");
  }
}

let javascript = new Curso("Curso profesional de Javascript");

console.log(javascript.titulo);
javascript.inscribir();