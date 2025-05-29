import express from 'express';
import { PORT, DOMAIN } from "./config/config.js";

const app = express();

// Middleware para parsear JSON en el cuerpo de las solicitudes(se aplica a todas las rutas o auna ruta en especifico)
app.use(express.json()); 

//Endpoint

const baseDeDatos = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Maria" },
  { id: 25, nombre: "Pedro" },
];

// Ruta principal
app.get("/", (req, res) => {
  res.send("Bienvenido a nuestra REST API");
});

app.post("/", (req, res) => {
  res.send("Realizando POST en HOme");
});

// Rutas de Tareas
app.post("/tareas", (req, res) => {
  console
  const { tarea, isCompletada } = req.body;
  res.send(`Tarea recibida:${tarea}`);
});

// recibir una tarea nueva con POST

// obtener lista de usuarios 
app.get("/usuarios", (req, res) => {
  res.send("Lista de usuarios");
});

// Obtener un usuario por ID y nombre
app.get("/usuarios/:uid", (req, res) => {
  const {uid} = req.params; // Convertir el ID a número
  console.log(`Id de usuarios : ${uid}`)

  const usuario = baseDeDatos.find(
    (user) => user.id === uid && user.nombre === nombreUsuario
  );

  if (!usuario) {
    return res.status(404).send("Usuario no encontrado");
  }

  res.send(`Usuario encontrado: ${usuario.nombre} (ID: ${usuario.id})`);
});

// Eliminar un usuario por ID y nombre
app.delete("/usuarios/:id/:nombre", (req, res) => {
  const uid = parseInt(req.params.id); // Convertir el ID a número
  const nombreUsuario = req.params.nombre;

  const index = baseDeDatos.findIndex(
    (user) => user.id === uid && user.nombre === nombreUsuario
  );

  if (index === -1) {
    return res.status(404).send("Usuario no encontrado para eliminar");
  }

  const usuarioEliminado = baseDeDatos.splice(index, 1)[0]; // Eliminar el usuario
  res.send(
    `Usuario eliminado: ${usuarioEliminado.nombre} (ID: ${usuarioEliminado.id})`
  );
});

// Actualizar un usuario
app.put("/usuarios", (req, res) => {
  res.send("Actualización de usuarios");
});

fetch('https://cei.es/usuarios/1?accion=changePassword',{
  method:"PATCH",
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/ 5.0'
  },
  body: JSON.stringify({
    mail: "juan@cei.es",
    oldPass: "1234",
    newPass: "12345"
  })
});

app.patch("/usuarios/:uid", (req, res) => { 
  const uid = req.params.uid;
  const {accion} = req.query;
  const { mail, oldPass, newPass } = req.body;

  console.log(req.headers);
  console.log(`El user agent es : ${req.headers['user-agent']}`);
  console.log(`Id de usuario:${uid}`);
  console.log(`Acción a ejecutar: ${accion}`);
  console.log(`El email es: ${mail}`);

  res.status(404).json(req.body)
  // Aquí podrías agregar lógica para actualizar el usuario en la base de datos
  res.send("Accediste a la ruta de cambiar contraseña");
});

//Rsponse en JSON
app.get("/productos/:id", (req, res) => {
res.status(200).res.json({producto: "aspiradora", precio:1000})
});
//  Response d error 404
app.get("/error", (req, res) => {
  res.status(404).send("Página no encontrada");
});

//Redireccion 
app.get("/redireccion", (req, res) => {
  res.status(300).redirect("https://google.com");
});

// setHeaders
app.get("/html", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1>Este es un mensaje en HTML</h1>");
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${DOMAIN}:${PORT}`);
});