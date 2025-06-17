import {Usuario} from "../db/models/index.js"; // importar el modelo de usuario
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";


   const ResponseAPI= {
    msg:"", satus:"ok", data:{}
   }
   
   
   export const registerUser = async( req,res,next) => {
        try{
            // traer datos del body
            const {email, password, name} = req.body;


            // verificar si el user existe
            const existingUser = await Usuario.findOne({email})// se manda el atributo con el valor porque es el midmo
            if(existingUser){
                return res.status(400).json({
                    msg:"Usuario con ese correo ya existe, si eres tù, intenta hacer un login"
                })
            }

            // generar clave segura( hash)

            // Crear nuetsro user 
            const newUser = new Usuario({
                email,
                password, // aqui se guarda el hash
                name
            })
            await newUser.save() // guardar en la base de datos



            // Crear un token JWT

            const token = jwt.sign({
                userId: newUser._id,// mongoose devuelve un id con "_"
                name: newUser.name
            }, 
                JWT_SECRET, // clave secreta del JWT
                {expiresIn: "2h"} // tiempo de expiración del token
            )

            // devolver los datos del usuario + el token JWT

            ResponseAPI.msg = "Usuario registrado correctamente";
         
            ResponseAPI.data = {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                token: token
            }

          

            return res.status(200).json(ResponseAPI)
        }
            catch(e){
                next(e)
            }
        }
    
        
    export const loginUser  = async( req,res,next) => {
        try{
            return res.status(200).json(ResponseAPI)
        }
            catch(e){
                next(e)
            }
        }
    
        
    export const getCurrentUser  = async( req,res,next) => {
        try{
            return res.status(200).json(ResponseAPI)
        }
            catch(e){
                next(e)
            }
        }
    
        