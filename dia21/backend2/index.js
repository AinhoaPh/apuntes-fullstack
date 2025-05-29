const express = require("express");
const app = express();

app.use(express.json()); // Middleware para parsear JSON en el cuerpo de las solicitudes

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
  try {
    const { tarea, isCompletada } = req.body;
    
    if (!tarea) {
      return res.status(400).json({
        error: "La tarea es requerida"
      });
    }

    const nuevaTarea = {
      tarea,
      isCompletada: isCompletada || false
    };

    res.status(201).json({
      mensaje: "Tarea creada exitosamente",
      tarea: nuevaTarea
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al procesar la tarea"
    });
  }
});

// recibir una tarea nueva con POST

// obtener lista de usuarios 
app.get("/usuarios", (req, res) => {
  res.send("Lista de usuarios");
});

// Obtener un usuario por ID y nombre
app.get("/usuarios/:id/:nombre", (req, res) => {
  const idUsuario = parseInt(req.params.id); // Convertir el ID a número
  const nombreUsuario = req.params.nombre;

  const usuario = baseDeDatos.find(
    (user) => user.id === idUsuario && user.nombre === nombreUsuario
  );

  if (!usuario) {
    return res.status(404).send("Usuario no encontrado");
  }

  res.send(`Usuario encontrado: ${usuario.nombre} (ID: ${usuario.id})`);
});

// Eliminar un usuario por ID y nombre
app.delete("/usuarios/:id/:nombre", (req, res) => {
  const idUsuario = parseInt(req.params.id); // Convertir el ID a número
  const nombreUsuario = req.params.nombre;

  const index = baseDeDatos.findIndex(
    (user) => user.id === idUsuario && user.nombre === nombreUsuario
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

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});