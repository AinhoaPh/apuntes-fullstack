import express from "express"
import { PORT, DOMAIN } from "./config/config.js";

import { router } from "./routes/index.routes.js";

const app = express();

// Middleware para parsear JSON en el cuerpo de las solicitudes(se aplica a todas las rutas o auna ruta en especifico)
app.use(express.json()); // procesar el re.body en caso de ser JSON 

app-use("/api/v1", router)


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${DOMAIN}:${PORT}`);
});


