import mongoose from "mongoose";

const  MONGO_DB_URI = process.env.MONGO_DB_URI// process.env.MONGODB_URI; para leer los archivos de entorno URI->indiqa el protocolo de conexion de esa variable( mongodb o mongodb+srv://)

export const conectaDB = async ()=>{
    if(!MONGO_DB_URI){
        throw new Error("Definir un a variable MONGO_DB_URI en el archivo .env");
    }

    //  si ya estamos conectados a la base de datos, no hacemos nada
    if(mongoose.connection.readyState === 1){
        console.log("Conectado a la base de datos");
        return;
    }
    try{
        await mongoose.connect(MONGO_DB_URI)
        console.log("Conectado a la base de datos MongoDB Atlas");
        console.log("base de datos actual:", mongoose.connection.db.databaseName); // muestra el nombre de la base de datos actual en uso
        
        // preguntar que colecciones tengo disponibples

        const collection = await mongoose.connection.db.listCollections().toArray();
        console.log("Colecciones disponibles:", collection.map(c => c.name)); // muestra las colecciones disponibles en la base de datos actual
    }catch(e){
        console.error("Error al conectar a la base de datos", e);
        throw e;// directamente lanza el error
    }
}