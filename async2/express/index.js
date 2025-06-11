// Importaciones necesarias
import express from 'express';
//import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Lee las variables de .env

const app = express(); // Crea la app
const PORT = process.env.PORT || 3000;

// Middlewares
//app.use(cors()); // Permite peticiones de otros orígenes
app.use(express.json()); // Soporte para JSON
app.use(express.urlencoded({ extended: true })); // Soporte para formularios

// Ruta principal
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Bienvenido GET en "/"' });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});