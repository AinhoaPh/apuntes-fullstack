import { Router } from "express";

import { createTarea, deleteTarea, getTareaById, getTareas, updateTarea } from "../controllers/tareas.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import adminMiddleware from "../middleware/admin.middleware.js";
import validateMiddleware from "../middleware/validate.mddleware.js";

// Importar el array de tareas desde un archivo de datos para ser usado en index.js
export const router = Router();


//rutas de tareas
router.get("/landing", authMiddleware)

// obtener las tareas
 router.get("/tareas",authMiddleware, getTareas);
// tarea especifica por id

router.get("/tareas/:id", getTareaById)
// Crear una nueva tarea
router.post("/tareas", authMiddleware,validateMiddleware,  adminMiddleware, createTarea )

// actualizar
router.put("/tareas/:id", updateTarea );

// Eliminar una tarea por id
router.delete("/tareas/:id", deleteTarea);
