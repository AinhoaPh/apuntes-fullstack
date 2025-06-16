"use server"
import {conectaDB} from "@/lib/db/mongodb";
import Usuario from "@/lib/db/models/usuario";

// reavlidar la ruta para atualizar la pag que modifique
import { revalidatePath } from "next/cache";

// obtener todos los users
export async function getUsuarios2() {

    try{
        await conectaDB();

        // obtener datos con Mongoose
        const usuarios = await Usuario.find({}).sort({createdAt: -1})
        return {
            msg: "Usuarios obtenidos correctamente",
            data: usuarios,
            status:"Ok"
        }

    }catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        return {
          msg: "Error al obtener usuarios",
          data: [],         // lista vacía si hay error
          status: "Error"
        };
      }

}

// ocrear usuario
export async function crearUsuario(formData) {

  try{
      await conectaDB();

      const datosUsuario= {
          name: formData.get("name"),
          email: formData.get("email"),
          edad: parseInt(formData.get("edad")) || undefined

      }
const nuevoUsuario = new Usuario(datosUsuario);// en base al modelo de mongoose
const usuarioGuardado = await nuevoUsuario.save();

revalidatePath("/"); // revalidar la ruta para atualizar la pag que modifique


      // obtener datos con Mongoose
  //    const usuarios = await Usuario.find({}).sort({createdAt: -1})
      return {
          msg: "Usuario creado",
          data: JSON.stringify(usuarioGuardado),
          status:"Ok"
      }

  }catch (error) {
      console.error("Error al conectar a la base de datos:", error);
      return {
        msg: "Error al obtener usuarios",
        data: [],         // lista vacía si hay error
        status: "Error"
      };
    }

}