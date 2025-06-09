import { Usuario} from '../db/models/index.js';

//Objeto modelo para nuestras respuestas
const ResponseAPI = {
  data:[],
  msg:"",
  status:"ok"
}
// logica de prog

export const getUsuarios = async (req, res, next) => {
  try{

    // traer los datos de la coleccion
    const users = await Usuario.find();

    console.log("Obteniendo todos los usuarios");
    //OPcion1
    // res.status(200).json({
    //     msg:"Usuarios obtenidos",
    //     data: users
    // })

    //Opcion2
    ResponseAPI.msg="Usuarios obtenidos";
    ResponseAPI.data = users;
    res.status(200).json(ResponseAPI)
  }catch(e){
    next(e); 
  }
  
}

export const getUsuariosById = async (req, res, next) => {
  try{
    const { uid } = req.params;
    // traer los datos de la coleccion
    const user = await Usuario.findById(uid);
    console.log("Obteniendo usuario por id:", uid);
    if(!user) {
      //  res.status(404).json({ msg:"Usuario no encontrada"});
      ResponseAPI.msg = "Usuario no encontrado";
      ResponseAPI.data = [];
      ResponseAPI.status = "error";
     res.status(404).json(ResponseAPI);
    }
  
        ResponseAPI.msg="Usuario encontrado"
        ResponseAPI.data = user;
    res.status(200).json(ResponseAPI);
  }catch(e){
    next(e); 
  }

}

export const createUsuario = async (req, res, next) => {
  try{

    //opcion1
  // const { nombre, email, username } = req.body;
  //   const usuario = new Usuario({
  //     nombre,
  //     email,
  //     username

  //   })
    const usuarioCreado = await usuario.save();
    console.log("Usuario creado:", usuarioCreado);
    //opcin 2
    const { name, email, username } = req.body;
    const newUser = new Usuario({
      name: name,
      username: username,
      email: email
    });



    ResponseAPI.msg="Usuario creado correctamente";
    ResponseAPI.data = user;
    ResponseAPI.status = "ok";
res.status(200).json(ResponseAPI);

  }catch(e){
    next(e);
  }
}



export const updateUser= async (req, res, next ) => {

    try{
      const { uid } = req.params;
      const updateUser = Modelo.findByIdAndUpDate(id, {campo:valor, campo2:valor2}, {new:true})
      if(!user) {
        //  res.status(404).json({ msg:"Usuario no encontrada"});
        ResponseAPI.msg = "Usuario no encontrado";
        ResponseAPI.data = [];
        ResponseAPI.status = "error";
       res.status(404).json(ResponseAPI);
      }
    
          ResponseAPI.msg="Usuario encontrado"
          ResponseAPI.data = [];
      res.status(204).json(ResponseAPI);
    }catch(e){
      next(e); 
    }
  
  }

export const deleteusuario =  (req, res) => {
    const { id } = req.params;
    const idx = usuario.findIndex(t => t.id == id);
  
    if (idx == -1) {
      return res.status(404).json({ error: "usuario no encontrada" });
    }
  
    const tarea = usuario[idx]; // Corregido: usar idx en lugar de idx
  
    usuario.splice(idx, 1);
  
    res.status(200).json({
      msg: `usuario ${id} eliminada correctamente`,
      data: tarea,
      cant: usuario.length
    });
  }
