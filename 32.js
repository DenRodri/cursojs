function Estudiante(){
  this.nombre="Uriel";
  this.saludar = function(){
    console.log(this)
  };
  this.saludar = this.saludar.bind(this);
}

let e = new Estudiante();

let f = e.saludar;

e.saludar();
f();

setTimeout(e.saludar, 100);

/*
  Inmediata: call y apply
  Lazy: bind

*/

e.saludar.call({}, "1", "2")
e.saludar.call({}, ["1", "2"])