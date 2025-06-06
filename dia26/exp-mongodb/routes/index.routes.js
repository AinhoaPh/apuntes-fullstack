import { Router } from "express";
import { createUsuario, getUsuarios, getUsuariosById, } from "../controllers/usuarios.controller.js";



// Importar el array de tareas desde un archivo de datos para ser usado en index.js
export const router = Router();


//rutas de tareas
router.get("/public")



// obtener las tareas
 router.get("/usuarios", getUsuarios);


// tarea especifica por id

router.get("/usuario/:uid", getUsuariosById);

// // Crear una nueva tarea
 router.post("/usuarios", createUsuario )

// // actualizar
// router.put("/tareas/:id", updateTarea );

// // Eliminar una tarea por id
// router.delete("/tareas/:id", deleteTarea);
