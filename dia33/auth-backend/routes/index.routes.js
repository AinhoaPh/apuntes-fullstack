// import {
  //   createUsuario,
  //   getUsuarios,
  //   getUsuariosById,
//   updateUser,
//   deleteUsuario
// } from "../controllers/usuarios.controller.js";

import { Router } from "express";
import { loginUser, registerUser, getCurrentUser } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
export const router = Router();

//  CRUD 
// RUTAS de auth ) auth.controller.js aun no se tiene token por lo que auth no es necesario
router.post("/auth/login", loginUser)
router.post("/auth/register", registerUser)

// pruebas para traer datos 
// router.get("/auth/register", (req, res) => {
//   res.send("Ruta de registro funcionando.");
// });


router.get("/auth/me",authMiddleware, getCurrentUser)
router.get("/protected",authMiddleware, (req, res) => {
  res.json({

    msg:"Ruta protegida pudiste acceder con tu token válido"});
});




// // Ruta pública de prueba
// router.get("/public", (req, res) => {
//   res.send("Ruta pública funcionando correctamente");
// });

// // Rutas CRUD de usuarios

// // Obtener todos los usuarios
// router.get("/usuarios", getUsuarios);

// // Obtener un usuario por ID
// router.get("/usuarios/:uid", getUsuariosById);

// // Crear un nuevo usuario
// router.post("/usuarios", createUsuario);

// // Actualizar usuario por ID
// router.put("/usuarios/:uid", updateUser);

// // Eliminar usuario por ID
// router.delete("/usuarios/:uid", deleteUsuario);



