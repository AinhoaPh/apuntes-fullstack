import { Router } from "express";
import { getUsuarios } from "../controllers/usuarios.controller";



// Importar el array de tareas desde un archivo de datos para ser usado en index.js
export const router = Router();


//rutas de tareas
router.get("/public")

// obtener las tareas
 router.get("/usuarios", getUsuarios);
// tarea especifica por id

// router.get("/tareas/:id", getTareaById)
// // Crear una nueva tarea
// router.post("/tareas", authMiddleware,validateMiddleware,  adminMiddleware, createTarea )

// // actualizar
// router.put("/tareas/:id", updateTarea );

// // Eliminar una tarea por id
// router.delete("/tareas/:id", deleteTarea);
