// como importar modulos con ES6

// import { nombre, edad, saludar } from './usuario.js';
// import saludar from './usuario.js';// export default por defecto y no se utilizan {}

import { nombre, edad } from './usuario.js'; // export como elemento comun como objeto

import saludar, { nombre, edad } from './usuario.js'; // export default y export como elemento comun como objeto

console.log("mi nombre es: " , nombre);
console.log("mi edad es: " , edad);

saludar(nombre, edad);
saludar("Tomi", 41);


