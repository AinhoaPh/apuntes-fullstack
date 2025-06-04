import express from 'express';
import { PORT, DOMAIN } from "./config/config.js";
import { router } from './routes/index.routes.js';

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
  res.status(200).send(`Bienvenido a nuestra REST API entra <a href="${DOMAIN}:${PORT}/landing">La nding</a>`);
});

// const tareas  =[
//   {id:1, texto:"Comprar pan", isCompletada:false,},
//   {id:3, texto:"Hacer la compra", isCompletada:false,},
//   {id:4, texto:"Estudiar", isCompletada:false,},
// ]


// Importar las rutas desde el archivo de routes utiliza nuestro router para tdds los endpoint que coinciden api/v1/...
app.use("/api/v1",router);




// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${DOMAIN}:${PORT}`);
});