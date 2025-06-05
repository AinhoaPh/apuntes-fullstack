//import {usuarios} from '../data/usuarios.js';

// logica de prog

export const getUsuarios = (req, res, next) => {
  try{
    console.log("Obteniendo todos los usuarios");
    res.status(200).json({msg:"Usuarios obtenidos"})
  }catch(e){
    next(e); 
  }
  
}

