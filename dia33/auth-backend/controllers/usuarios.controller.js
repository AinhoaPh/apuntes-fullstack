import { Usuario} from '../db/models/index.js';

//Objeto modelo para nuestras respuestas
const ResponseAPI = {
  data:[],
  msg:"",
  status:"ok"
}
// logica de prog

export const getUsuarios = async (req, res, next) => {
  try{

    // traer los datos de la coleccion
    const users = await Usuario.find().populate("productos");

    console.log("Obteniendo todos los usuarios");
    //OPcion1
    // res.status(200).json({
    //     msg:"Usuarios obtenidos",
    //     data: users
    // })

    //Opcion2
    ResponseAPI.msg="Usuarios obtenidos";
    ResponseAPI.data = users;
    res.status(200).json(ResponseAPI)
  }catch(e){
    next(e); 
  }
  
}

export const getUsuariosById = async (req, res, next) => {
  try{
    const { uid } = req.params;
    // traer los datos de la coleccion
    const user = await Usuario.findById(uid);
    console.log("Obteniendo usuario por id:", uid);
    if(!user) {
      //  res.status(404).json({ msg:"Usuario no encontrada"});
      ResponseAPI.msg = "Usuario no encontrado";
      ResponseAPI.data = [];
      ResponseAPI.status = "error";
     res.status(404).json(ResponseAPI);
    }
  
        ResponseAPI.msg="Usuario encontrado"
        ResponseAPI.data = user;
    res.status(200).json(ResponseAPI);
  }catch(e){
    next(e); 
  }

}

export const createUsuario = async (req, res, next) => {
  try{

    //opcion1
  // const { nombre, email, username } = req.body;
  //   const usuario = new Usuario({
  //     nombre,
  //     email,
  //     username

  //   })
    const usuarioCreado = await Usuario.save();
    console.log("Usuario creado:", usuarioCreado);
    //opcin 2
    const { name, email, username } = req.body;
    const newUser = new Usuario({
      name: name,
      username: username,
      email: email
    });



    ResponseAPI.msg="Usuario creado correctamente";
    ResponseAPI.data = user;
    ResponseAPI.status = "ok";
res.status(200).json(ResponseAPI);

  }catch(e){
    next(e);
  }
}


// Actualizar usuario
export const updateUser = async (req, res, next) => {
  try {
    const { uid } = req.params;
    const updateData = req.body;

    const updatedUser = await Usuario.findByIdAndUpdate(uid, updateData, { new: true });

    if (!updatedUser) {
      ResponseAPI.msg = "Usuario no encontrado";
      ResponseAPI.data = [];
      ResponseAPI.status = "error";
      return res.status(404).json(ResponseAPI);
    }

    ResponseAPI.msg = "Usuario actualizado correctamente";
    ResponseAPI.data = updatedUser;
    ResponseAPI.status = "ok";
    res.status(200).json(ResponseAPI);
  } catch (e) {
    next(e);
  }
};

// Eliminar usuario
export const deleteUsuario = async (req, res, next) => {
  try {
    const { uid } = req.params;
    const deletedUser = await Usuario.findByIdAndDelete(uid);

    if (!deletedUser) {
      ResponseAPI.msg = "Usuario no encontrado";
      ResponseAPI.data = [];
      ResponseAPI.status = "error";
      return res.status(404).json(ResponseAPI);
    }

    ResponseAPI.msg = `Usuario con id ${uid} eliminado correctamente`;
    ResponseAPI.data = deletedUser;
    ResponseAPI.status = "ok";
    res.status(200).json(ResponseAPI);
  } catch (e) {
    next(e);
  }
};


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