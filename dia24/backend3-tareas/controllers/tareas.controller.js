import {tareas} from '../data/tareas.js';

// logica de prog

export const getTareas = (req, res) => {
  res.status(200).json(tareas);
}

export const getTareaById = (req, res) => {
  const { id } = req.params;// variables de la url
//  console.log("id",id)

// Buscar la tarea por id
  // tareas es un array de objetos, cada objeto tiene una propiedad id
  // find devuelve el primer elemento que cumple la condición
  // t es un alias para cada elemento del array tareas
  // t.id == id compara el id de la tarea con el id recibido en los parámetros de la URL
  // Si no encuentra la tarea, devuelve undefined (404)con un json Tarea no encontrada
const task = tareas.find(t=>t.id ==id);
if(!task) res.status(404).json({error:"Tarea no encontrada"});

// task ->  {id:2, texto:"Hacer la compra", isCompletada:false},

const response= {
  msg: "Tarea encontrada",
  data: task,
  cant: tareas.length,
//   nextPage:"",
//   previousPage:""
}


  // res.status(200).json(task);
  res.status(200).json(response);
}

export const createTarea = (req, res)=>{
  const { texto, isCompletada } = req.body;
  console.log("Texto:", texto);

//Guardr en base de datos
  const NuevaTareas ={
    id: tareas.length + 1, // Asignar un nuevo ID basado en la longitud actual del array 
    texto:texto, 
    isCompletada:  isCompletada 
  }
  tareas.push(NuevaTareas); // Añadir la nueva tarea al array de tareas
  // Enviar la lista actualizada de tareas
  res.status(201).json(tareas)
}

export const updateTarea= (req, res) => {
    const { id } = req.params; // Obtener el id de la tarea a actualizar
    const { texto, isCompletada } = req.body; // Obtener los nuevos datos de la tarea
  
    // Buscar la tarea por id 
    //const tarea =tareas.find(t => t.id == id);
    const idx = tareas.findIndex(t => t.id == id);
    
  
    // forma 2 actualizar
    //if(!tarea)res.status(404).json({ error: "Tarea no encontrada" });
  
    //tarea.texto=texto||tarea.texto; // Actualizar el texto de la tarea si se proporciona uno nuevo
  
  //tarea.isCompletada =isCompletada || tarea.isCompletada; // Actualizar el estado de completado si se proporciona uno nuevo
  
      // Si no se encuentra la tarea, devolver un error 404
    if (idx === -1) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
  
    // Actualizar la tarea
    tareas[idx] = { id: parseInt(id), texto, isCompletada };
  
    // Enviar la lista actualizada de tareas
    res.status(200).json(tareas);
  }

export const deleteTarea =  (req, res) => {
    const { id } = req.params;
    const idx = tareas.findIndex(t => t.id == id);
  
    if (idx == -1) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
  
    const tarea = tareas[idx]; // Corregido: usar idx en lugar de idx
  
    tareas.splice(idx, 1);
  
    res.status(200).json({
      msg: `Tarea ${id} eliminada correctamente`,
      data: tarea,
      cant: tareas.length
    });
  }