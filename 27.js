let calificaciones = [ 10, 9, 8];

function obtenerCalificaciones(){
  return[10, 9, 8];
}

let [ matematicas, ...otrasCalificaciones] = obtenerCalificaciones();

console.log(matematicas);