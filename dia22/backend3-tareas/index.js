import express from 'express';
import { PORT, DOMAIN } from "./config/config.js";


const app = express();

// app.use(express.json()); // Middleware para parsear JSON en el cuerpo de las solicitudes
// app.use(express.static("public")); // Middleware para servir archivos estáticos desde la carpeta "public"

app.use("/landing", express.static("public/landing")); 
app.use("/imgs", express.static("public/imgs")); 

const tareas  =[
  {id:1, texto:"Comprar pan", isCompletada:false},
  {id:2, texto:"Hacer la compra", isCompletada:false},
]

/* Crear rutas
1. Obtener todas las tareas:"/api/v1/tareas"
2. Obtener tarea cin su id: "/api/v1/tareas/:id"
3. Endpoint para crer una nueva tarea (recibir tarea en JSON)
4. Actualizar un tarea con su id
5. Eliminar una tarea con su id

-> Todos request deber devolver la lista actualizada de tareas
-> todos los endpointg comienzan con :"/api/v1/" */ 

app.get("/", (req, res) => {
  res.send("Bienvenido a nuestra REST API");
});  // <-- Añadido el paréntesis de cierre faltante

// obtener las tareas
 app.get("/api/v1/tareas", (req, res) => {
  res.status(200).res.json(tareas);
 }
);
// tarea especifica por id

app.get("/api/v1/tareas/:id", (req, res) => {
  const { id } = req.params;
//  console.log("id",id)
const task = tareas.find(t=>t.id ==id);
if(!task) res.status(404).json({error:"Tarea no encontrada"});
  res.status(200).json(task);



})


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${DOMAIN}:${PORT}`);
});