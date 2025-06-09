import { Producto } from '../db/models/index.js';

//Objeto modelo para nuestras respuestas
const ResponseAPI = {
  data:[],
  msg:"",
  status:"ok"
}
// logica de prog

export const getProducto = async (req, res, next) => {
  try{

    // traer los datos de la coleccion
    const products = await Producto.find().popuelate("owner");

    console.log("Obteniendo todos los productos");
    //OPcion1
    // res.status(200).json({
    //     msg:"Usuarios obtenidos",
    //     data: users
    // })

    //Opcion2
    ResponseAPI.msg="Productos obtenidos";
    ResponseAPI.data = products;
    res.status(200).json(ResponseAPI)
  }catch(e){
    next(e); 
  }
  
}


export const createProducto = async (req, res, next) => {
  try{

    //opcion1
  // const { nombre, email, username } = req.body;
  //   const usuario = new Usuario({
  //     nombre,
  //     email,
  //     username

  //   })
    const productoCreado = await Producto.save();
    console.log("Usuario creado:", usuarioCreado);
    //opcin 2
    const { name, email, username } = req.body;
    const newProduct = new Producto({
      nombre: name,
      precio: number,
      owner: userId
    });



    ResponseAPI.msg="Usuario creado correctamente";
    ResponseAPI.data = user;
    ResponseAPI.status = "ok";
res.status(200).json(ResponseAPI);

  }catch(e){
    next(e);
  }
}

