import express from 'express';
import { PORT, DOMAIN } from "./config/config.js";
import { router } from './routes/index.routes.js';
import { logs } from './data/logs.js'; // Importar el array de logs para ser usado en el endpoint /verlogs


import logMiddleware from './middleware/logger.middleware.js';
import uniqueIdMiddleware from './middleware/uniqueid.middleware.js';
import authMiddleware from './middleware/auth.middleware.js';
import rateLimitMiddleware from './middleware/ratelimiter.middleware.js';
import {errorHandler, notFoundHandler} from './middleware/error.middleware.js';


const app = express();
 
// funciones intermedias para modificar req,res
app.use(express.json()); // Middleware para parsear JSON en el cuerpo de las solicitudes funcion que se ejecuta en un cicl de vida d nuetsr consulta y podria modificar el req o el res.(procesa cualquier body que este en JSON )



app.use(express.static("public")); // Middleware para servir archivos estáticos desde la carpeta "public"
//app-use("/endpoint", express.static("carpeta-de-mis-archivos-estaticos")); // Middleware para servir archivos estáticos desde una carpeta específica

app.use(uniqueIdMiddleware)// Middleware personalizado para verificar la unicidad de la tarea
app.use(logMiddleware); // Middleware personalizado para registrar las solicitudes
// Servir archivos estáticos desde la carpeta "public/landing"
// app.use("/landing", express.static("public/landing")); 
app.use("/landing", authMiddleware)// // Middleware de autenticación para la ruta /landing

//http://localhost:3000/imgs/tareas.jpg
//app.use("/imgs", express.static("public/imgs")); // traera este archivo



app.get("/", (req, res) => {
  res.status(200).send(`Bienvenido a nuestra REST API entra <a href="${DOMAIN}:${PORT}/landing">Landing</a>`);
});
app. get("/verlogs", (req, res) => {
  res.json(logs)
});


// Importar las rutas desde el archivo de routes utiliza nuestro router para tdds los endpoint que coinciden api/v1/...
app.use("/api/v1",rateLimitMiddleware,router);

app.get("/ver.error",(req,res,next) => {
  //opcion1;
  //const error = new Error("Este es un error de prueba");
  //error.status = 500; // Puedes establecer un código de estado personalizado si lo deseas
  //next(error); // Pasar el error al middleware de manejo de errores

  //opcion2:
  try{
    console.log("Intentando ejecutar código que puede fallar");
    const num = 3;
    num=2;

    res.send("Probando enviar mensaje de error")
  }catch(error) {
    next(error); // Pasar el error al middleware de manejo de errores
  }

}
);
app.get("/error2", (req, res, next) => {
  // Simular un error
  const error = new Error("Este es otro error de prueba");
  error.status(444);
  next(error); // Pasar el error al middleware de manejo de errores
});
// ruta comodin en caso de no haber entrado a ninguna de las anteriores
app.use(notFoundHandler);



app.use(errorHandler); // Middleware para manejar errores tienen "err" como primer parametro app use sin ruta aplicata a todo


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${DOMAIN}:${PORT}`);
});