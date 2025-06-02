import express from "express"
import { PORT, DOMAIN } from "./config/config.js";

const app = express();

// Middleware para parsear JSON en el cuerpo de las solicitudes(se aplica a todas las rutas o auna ruta en especifico)
app.use(express.json()); 


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${DOMAIN}:${PORT}`);
});


