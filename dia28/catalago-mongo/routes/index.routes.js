import { Router } from "express";
import {
  createUsuario,
  getUsuarios,
  getUsuariosById,
  updateUser,
  deleteUsuario
} from "../controllers/usuarios.controller.js";
import{ getProducto, createProducto } from "../controllers/productos.controller.js";
export const router = Router();

// Ruta pública de prueba
router.get("/public", (req, res) => {
  res.send("Ruta pública funcionando correctamente");
});

// Rutas CRUD de usuarios

// Obtener todos los usuarios 

router.get("/usuarios", getUsuarios);

// Obtener un usuario por ID
router.get("/usuarios/:uid", getUsuariosById);

// Crear un nuevo usuario
router.post("/usuarios", createUsuario);

// Actualizar usuario por ID
router.put("/usuarios/:uid", updateUser);

// Eliminar usuario por ID
router.delete("/usuarios/:uid", deleteUsuario);


router.get("/productos", getProducto);

// Obtener un usuario por ID
// router.get("/productos/:uid", getProductoById);

// Crear un nuevo usuario
router.post("/productos", createProducto);

// Actualizar usuario por ID
// router.put("/productos/:uid", updateProducto);

// // Eliminar usuario por ID
// router.delete("/productos/:uid", deleteProducto);


