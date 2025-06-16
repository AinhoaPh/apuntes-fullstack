import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    email: {
        type: String,
        required: true,
        unique: true, // emailno se puede repetir
        trim: true,
        lowercase: true
    },
    edad: {
        type: Number,
        min: 0,// Edad no puede ser negativa

    }

}, { timestamps: true });// agrega fechas de  createdAt y updatedAt automaticamente

// No reconstruye el modelo cuando estamos en desarrollo y se reinicia el servidor
const Usuario = mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema);

export default Usuario;