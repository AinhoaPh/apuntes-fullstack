
export const getUsuarios = async (req, res, next) => {
    try{
  
      // traer los datos de la coleccion
      const users = await Usuario.find().populate("productos");
  
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
// como traer usuarios de mi base de datos https://localhost:3001/api/posts
export const getPosts = async () => {
    const response = await fetch('https://localhost:3001/api/posts');
    return response.json();
}  