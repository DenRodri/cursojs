let user = {
  edad: 20,
  nombre: "Uriel"
}

let esquemaPermisos = { nivel: 2 }

let copia = Object.assign(user, esquemaPermisos);

//let copia = Object.assign(user, { permisos: true});

console.log(copia);