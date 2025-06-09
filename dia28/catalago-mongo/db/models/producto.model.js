import mongoose from 'mongoose';

const options = {
    collection: 'productos', // productos archivo de bas de datos 
    strict: true, // Habilita el modo estricto para el esquema solo permite guardar los campos definidos en el esquema
    collation: {
       locale:"es", // config para idioma 
       strength: 1 // Nivel que va ausar cuando se comparen los campos de texto, 1 ignoraa mayúsculas y minúsculas y tildes
    }
   }

       // product model
       const productSchema = new mongoose.Schema({
        nombre: String,
        precio: Number,
        owner: {type: mongoose.Schema.Types.ObjectId, ref:'Usuario'}// usuario dueño mediante suid 
    },options);
    export const Producto = mongoose.model("Producto", productSchema)
