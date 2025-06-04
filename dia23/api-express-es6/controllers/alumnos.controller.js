import {alumnos} from "../data/alumnos.js";


export const getAlumnos = (req, res) => {
  res.status(200).json(alumnos);
}


// GET /api/v1/alumnos/curso/:nombreCurso
export const  getAlumnoByCurso =(req, res) => {
    const { nombreCurso } = req.params;
  
    const filtro = alumnos.filter(
      (a) => a.curso.toLowerCase() === nombreCurso.toLowerCase()
    );
  
    res.json(filtro);
    
  }

  export const createAlumno = ( req,res)=>{
    const nuevoALumno = req.body; // Obtener el nuevo alumno del cuerpo de la solicitud
    nuevoALumno.id = Math.floor(Math.random() * 1000); // Asignar un ID aleatorio al nuevo alumno
    alumnos.push(nuevoALumno); // Añadir el nuevo alumno al array de alumnos
    res.status(201).json(nuevoALumno); // Enviar el nuevo alumno como respuesta
  }

  