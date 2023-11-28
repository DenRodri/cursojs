class User{
  constructor(name){
    this.name = name;
  }
  saludar(){
    console.log("Hola usuario");
  }
}

class Admin extends User{
  constructor(name){
    super(name);
  }

  saludar(){
    super.saludar();

    console.log("Hola soy admin");
  }
}
let admin = new Admin("Uriel");

console.log(admin.name)
admin.saludar()