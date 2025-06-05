import express from 'express';
import { PORT, DOMAIN } from "./config/config.js";
import cors from 'cors';// Middleware para permitir solicitudes desde otros dominios
import { connectDB } from './db/mongoose.js';
import { router } from './routes/index.routes.js';
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';


const app = express();

// funciones intermedias para modificar req,res

app.use(cors()); // Middleware para permitir solicitudes desde otros dominios (CORS)

app.use(express.json()); // Middleware para parsear JSON en el cuerpo de las solicitudes funcion que se ejecuta en un cicl de vida d nuetsr consulta y podria modificar el req o el res.(procesa cualquier body que este en JSON )

app.use(express.urlencoded({ extended: true })); // Middleware para parsear datos de formularios (application/x-www-form-urlencoded)

connectDB(); // Conectar a la base de datos MongoDB

app.use("/", express.static("public"));
// app.use("/", express.static("public/landing")); // Middleware para servir archivos estáticos desde la carpeta "public"
//app-use("/endpoint", express.static("carpeta-de-mis-archivos-estaticos")); // Middleware para servir archivos estáticos desde una carpeta específica



app.get("/", (req, res) => {
  res.status(200).send({msg:"Bienvenido a nuestra REST API con MongoDB"});
});

// app.get("/", (req, res) => {
//   res.status(200).send(`Bienvenido a nuestra REST API con MongoDBentra <a href="${DOMAIN}:${PORT}/landing">Landing</a>`);
// });




app.get("/ver.error", (req, res, next) => {
  //opcion1;
  //const error = new Error("Este es un error de prueba");
  //error.status = 500; // Puedes establecer un código de estado personalizado si lo deseas
  //next(error); // Pasar el error al middleware de manejo de errores

  //opcion2:
  try {
    console.log("Intentando ejecutar código que puede fallar");
    const num = 3;
    num = 2;

    res.send("Probando enviar mensaje de error")
  } catch (error) {
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


// ruta aplica a todo
app.use("/api/v1", router)

// ruta comodin en caso de no haber entrado a ninguna de las anteriores
app.use(notFoundHandler);



app.use(errorHandler); // Middleware para manejar errores tienen "err" como primer parametro app use sin 

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${DOMAIN}:${PORT}`);
});