import { profesores } from "../data/profesores";

export const getProfesores = (req, res) => {
  res.status(200).json(profesores);
}

// GET /api/v1/profesores/curso/:nombreCurso
export const  getProfesorByCurso =(req, res) => {
    const { nombreCurso } = req.params;
  
    const filtro = profesores.filter(
      (p) => p.curso.toLowerCase() === nombreCurso.toLowerCase()
    );
  
    res.json(filtro);
    
  }

  export const createProfesor = ( req,res)=>{
    const nuevoProfesor = req.body; // Obtener el nuevo alumno del cuerpo de la solicitud
    nuevoProfesor.id = Math.floor(Math.random() * 1000); // Asignar un ID aleatorio al nuevo alumno
    profesores.push(nuevoProfesor); // Añadir el nuevo alumno al array de profesores
    res.status(201).json(nuevoProfesor); // Enviar el nuevo alumno como respuesta
  }

  