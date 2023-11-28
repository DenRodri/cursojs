// const operation = (numero1, numero2, op) => {
//     return op(numero1, numero2);
// }

// operation(1, 3, (a, b) => a + b)
// operation(1, 3, (a, b) => a * b)
// operation(1, 3, (a, b) => a - b)

let teHasPortadoBien = false;

const siMePortoBien = new Promise((resolve, reject) => {
  if (teHasPortadoBien) {
    const telefono = {
      modelo: 'iPhone12',
      capacidad: '128GB',
      color: 'rojo',
    };
    resolve(telefono);
  } else {
    reject('te has portado mal');
  }
});


const promesaCumplida = (resolvedValue) => {
  console.log(`Te regalo tu nuevo ${resolvedValue.modelo}`);
};
const promesaRota = (rejectedValue) => {
  console.log(`No te compro nada porque ${rejectedValue}`);
};

siMePortoBien.then(promesaCumplida, promesaRota);

