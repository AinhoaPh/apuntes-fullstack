# Crear un proyecto vite + react
    - nombre: "auth-frontend"
    - incluir "@" como alias `vite.config.js` y `jsonconfig.json`
    - crear pagina de "landing" "login" "perfil" "register"
    - crear rutas "/" "login" "perfil" "register"
    - implementar react router 
    - aplicar tailwind-4 mediante CDN
    - crear navegacion para moverse en las distintas secciones.


// ============================
// FILTROS BÁSICOS
// ============================
// // ============================
// // OPERADORES COMUNES
// // ============================

// /*
// $eq   → igual a
// $ne   → distinto de
// $gt   → mayor que
// $gte  → mayor o igual que
// $lt   → menor que
// $lte  → menor o igual que
// $in   → valor incluido en un array
// $nin  → valor NO incluido en un array
// $and  → todas las condiciones deben cumplirse
// $or   → al menos una condición debe cumplirse
// */

// const mayoresDeEdad = await Usuario.find({ edad: { $gt: 18 } }); // edad > 18
// const menoresOIgualesA18 = await Usuario.find({ edad: { $lte: 18 } }); // edad <= 18
// const nombreExacto = await Usuario.find({ name: { $eq: "Blue" } }); // name === "Blue"
// const distintoDeNombre = await Usuario.find({ name: { $ne: "Juan" } }); // name !== "Juan"

// // ============================
// // SETEAR VALORES EN MUCHOS DOCUMENTOS
// // ============================

// await Usuario.updateMany(
//   { edad: { $exists: false } }, // si no existe la propiedad edad
//   { $set: { edad: 17 } }         // se le asigna 17
// );


// // ============================
// // EJEMPLOS AVANZADOS
// // ============================

// try {
//   // Usuarios cuya edad está en un array de valores
//   const enRango = await Usuario.find({ edad: { $in: [25, 30, 35] } });

//   // Usuarios cuya edad NO está en un array de valores
//   const fueraDeRango = await Usuario.find({ edad: { $nin: [25, 30, 35] } });

//   // Usuarios mayores de 21 Y con nombre 'Blue'
//   const andExample = await Usuario.find({
//     $and: [
//       { edad: { $gt: 21 } },
//       { name: 'Blue' }
//     ]
//   });

//   // Usuarios mayores de 21 O con nombre 'Blue'
//   const orExample = await Usuario.find({
//     $or: [
//       { edad: { $gt: 21 } },
//       { name: 'Blue' }
//     ]
//   });

//   console.log({ enRango, fueraDeRango, andExample, orExample });
  
// } catch (error) {
//   next(error); // Asegúrate de que 'next' esté definido si usas Express
// }