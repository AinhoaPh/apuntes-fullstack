import {alumnos} from "../models/alumnos.model.js";
// GET /api/v1/alumnos/curso/:nombreCurso
app.get("/api/v1/alumnos/curso/:nombreCurso", (req, res) => {
    const { nombreCurso } = req.params;
  
    const alumnosFiltrados = alumnos.filter(
      (alumno) => alumno.curso.toLowerCase() === nombreCurso.toLowerCase()
    );
  
    if (alumnosFiltrados.length === 0) {
      return res.status(404).send("No se encontraron alumnos para ese curso.");
    }
  
    res.json(alumnosFiltrados);
    
  });