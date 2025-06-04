
// middl de manejo de errores
export const notFoundHandler = (req, res, next) => {
    // ya pase por tdos los middlewares y no encontre la ruta
    const error = new Error("404 Ruta no encontrada");
    error.status = 404; // Establecer un código de estado personalizado .
    // si lo pongo (404) me salta error.status no encontrado

  next(error);
}

// Middleware para acapturar errores
export const errorHandler = (err, req,res, next) => {

    const statusCode= res.statusCode == 200 ? 500 : res.statusCode; // Si el estado es 200, significa que no se ha establecido un error, por lo que asignamos 500 como código de error interno del servidor

    res.status(statusCode).json({
        status:statusCode,
        msg: err.message,
        stack: process.env.NODE_ENV !== "production" ? "" :  err.stack // 
    })

   
}
 
export default errorHandler;

