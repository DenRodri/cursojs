class User {
  get nombre(){
    return this._nombre.charAt(0).toUpperCase() + this._nombre.slice(1);
  }
  set nombre(nombre){
    if(typeof nombre !== "string") throw new Error ("No es una cadena")
    this._nombre = nombre;
  }
}

let user = new User("cody");
user.nombre = "cody"; // setter
console.log(user.nombre); // getter