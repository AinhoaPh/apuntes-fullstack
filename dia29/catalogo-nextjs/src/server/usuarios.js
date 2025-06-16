 // server/usuarios.js
import express from "express";
import { Usuario } from "../models/Usuario.js"; // tu modelo Mongoose
const router = express.Router();

// GET /api/v1/usuarios
router.get("/", async (req, res) => {
  try {
    const listaUsuarios = await Usuario.find(); // trae todos los usuarios
    res.status(200).json({
      msg: "Lista de usuarios",
      data: listaUsuarios
    });
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ msg: "Error del servidor" });
  }
});


export default router;
