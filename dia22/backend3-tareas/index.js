import express from 'express';
import { PORT, DOMAIN } from "./config/config.js";


const app = express();


app.use(express.json()); // Middleware para parsear JSON en el cuerpo de las solicitudes funcion que se ejecuta en un cicl de vida d nuetsr consulta y podria modificar el req o el res.(procesa cualquier body que este en JSON )


// app.use(express.static("public")); // Middleware para servir archivos estáticos desde la carpeta "public"
//app-use("/endpoint", express.static("carpeta-de-mis-archivos-estaticos")); // Middleware para servir archivos estáticos desde una carpeta específica

// Servir archivos estáticos desde la carpeta "public/landing"
app.use("/landing", express.static("public/landing")); 


//http://localhost:3000/imgs/tareas.jpg
app.use("/imgs", express.static("public/imgs")); // traera este archivo



/* Crear rutas
1. Obtener todas las tareas:"/api/v1/tareas"
2. Obtener tarea cin su id: "/api/v1/tareas/:id"
3. Endpoint para crer una nueva tarea (recibir tarea en JSON)
4. Actualizar un tarea con su id
5. Eliminar una tarea con su id

-> Todos request deber devolver la lista actualizada de tareas
-> todos los endpointg comienzan con :"/api/v1/" */ 

app.get("/", (req, res) => {
  res.status(200).send(`Bienvenido a nuestra REST API entr a <a href="${DOMAIN}:${PORT}/landing">LAnding</a>`);
});

// const tareas  =[
//   {id:1, texto:"Comprar pan", isCompletada:false,},
//   {id:3, texto:"Hacer la compra", isCompletada:false,},
//   {id:4, texto:"Estudiar", isCompletada:false,},
// ]
const tareas  =[
  {id:1, texto:"Comprar pan", isCompletada:false, isDeleted:null},
  {id:3, texto:"Hacer la compra", isCompletada:false, isDeleted:null},
  {id:4, texto:"Estudiar", isCompletada:false, isDeleted:null},

]


// obtener las tareas
 app.get("/api/v1/tareas", (req, res) => {
  res.status(200).json(tareas);
 }
);
// tarea especifica por id

app.get("/api/v1/tareas/:id", (req, res) => {
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
})
// Crear una nueva tarea
app.post("/api/v1/tareas", (req, res)=>{
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
})

// actualizar
app.put("/api/v1/tareas/:id", (req, res) => {
  const { id } = req.params; // Obtener el id de la tarea a actualizar
  const { texto, isCompletada } = req.body; // Obtener los nuevos datos de la tarea

  // Buscar la tarea por id 
  //const tarea =tareas.find(t => t.id == id);
  const taskIndex = tareas.findIndex(t => t.id == id);
  

  // forma 2 actualizar
  //if(!tarea)res.status(404).json({ error: "Tarea no encontrada" });

  //tarea.texto=texto||tarea.texto; // Actualizar el texto de la tarea si se proporciona uno nuevo

//tarea.isCompletada =isCompletada || tarea.isCompletada; // Actualizar el estado de completado si se proporciona uno nuevo

    // Si no se encuentra la tarea, devolver un error 404
  if (taskIndex === -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  // Actualizar la tarea
  tareas[taskIndex] = { id: parseInt(id), texto, isCompletada };

  // Enviar la lista actualizada de tareas
  res.status(200).json(tareas);
});

// Eliminar una tarea por id
app.delete("/api/v1/tareas/:id", (req, res) => {
  const { id } = req.params; // Obtener el id de la tarea a eliminar

  // Buscar el índice de la tarea por id
  const taskIndex = tareas.findIndex(t => t.id == id);

  // Si no se encuentra la tarea, devolver un error 404
  if (taskIndex == -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }
  const tarea = tareas[idx]

  // Eliminar la tarea del array splice: // Elimina un elemento del array tareas en la posición taskIndex
  tareas.splice(taskIndex, 1);

  // Enviar la lista actualizada de tareas


  //res.status(204).send(); // 204 No Content indica que la tarea fue eliminada correctamente y no hay contenido para devolver

  res.status(200).json({
    msg: `Tarea ${id} eliminada correctamente`,
    data: tarea,
    cant: tareas.length
  });
}
);



// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${DOMAIN}:${PORT}`);
});