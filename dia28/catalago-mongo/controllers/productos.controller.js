import { Producto } from '../db/models/producto.model.js';

const ResponseAPI = {
  data: [],
  msg: "",
  status: "ok"
};

// Obtener todos los productos
export const getProducto = async (req, res, next) => {
  try {
    const products = await Producto.find().populate("owner"); // CORREGIDO

    console.log("Obteniendo todos los productos");

    ResponseAPI.msg = "Productos obtenidos";
    ResponseAPI.data = products;
    res.status(200).json(ResponseAPI);
  } catch (e) {
    next(e);
  }
};

// Crear un nuevo producto
export const createProducto = async (req, res, next) => {
  try {
    const { name, precio, owner } = req.body; // ← nombres claros y esperados en el body

    const newProduct = new Producto({
      nombre: name,
      precio: precio,
      owner: owner
    });

    const productoCreado = await newProduct.save(); // CORREGIDO

    ResponseAPI.msg = "Producto creado correctamente";
    ResponseAPI.data = productoCreado;
    res.status(201).json(ResponseAPI); // Status 201: creado
  } catch (e) {
    next(e);
  }
};