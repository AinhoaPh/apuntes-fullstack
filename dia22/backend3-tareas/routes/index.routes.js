import { Router } from "express";

import { createTarea, deleteTarea, getTareaById, getTareas, updateTarea } from "../controllers/tareas.controller.js";

// Importar el array de tareas desde un archivo de datos para ser usado en index.js
export const router = Router();


//rutas de tareas

// obtener las tareas
 router.get("/tareas", getTareas);
// tarea especifica por id

router.get("/tareas/:id", getTareaById)
// Crear una nueva tarea
router.post("/tareas", createTarea )

// actualizar
router.put("/tareas/:id", updateTarea );

// Eliminar una tarea por id
router.delete("/tareas/:id", deleteTarea);
