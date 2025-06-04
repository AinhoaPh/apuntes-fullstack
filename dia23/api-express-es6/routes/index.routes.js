import { Router } from "express";
import { createAlumno, getAlumnoByCurso, getAlumnos } from "../controllers/alumnos.controller";
import { createProfesor, getProfesorByCurso, getProfesores } from "../controllers/profesores.controller";

export const router = Router();



// obtener las alumnos
router.get("/alumnos", getAlumnos);

// obtener alumnos por curso
router.get("/alumnos/curso/:nombreCurso", getAlumnoByCurso)
router.post("/alumnos", createAlumno)

router.get("/profesores", getProfesores)
router.get("/profesores/curso/:nombreCurso", getProfesorByCurso)
router.post("/profesores", createProfesor)

router.get("/cursos", getCursos)
router.get("/cursos/:nombreCurso", getCursoByNombre) 




