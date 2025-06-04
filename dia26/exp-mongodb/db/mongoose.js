import mongoose from 'mongoose';
import { DB_USER,
    DB_PASS,
    CLUSTER,
    DATABASE} from "../config/config.js";

export const connectDB =  async () => {
    const url =`mongodb+srv://${DB_USER}:${DB_PASS}@${CLUSTER}/${DATABASE}`;// copiar link de conexión de Mongodb Atlas, en la pestaña de connect, luego en connect your application, copiar el link y pegarlo aqui, luego cambiar el usuario y contraseña por los que creamos en la base de datos
    // Ejemplo de URL de conexión: "mongodb+srv://${DB_USER}:${DB_PASS@${CLUSTER}/${DATABASE}"mongodb+srv://AinhoaCei:<db_password>@cei.sovuqad.mongodb.net/?retryWrites=true&w=majority&appName=cei

    try {
        await mongoose.connect(url);
        console.log("Conexión a la base de datos exitosa Mongodb Atlas", mongoose.connection.db.databaseName)
            
            const collections = await mongoose.connection.db.listCollections().toArray();
            console.log("COlecciones disponibles:", collections.map(c=>c.name))

    }catch (e) {
        console.log("Error al conectar a la base de datos:", e);
        
    }

}