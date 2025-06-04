/**
 * 
 * Verificar si el user esta autenticado es admin o no
 */

// solo en las que son POST
const adminMiddleware = (req, res, next) => {
    // Simulamos que el usuario es un administrador
    if(!req.user || req.user.role !== "admin"){
        return res.status(403).json({ error: "Acceso denegado. Solo admin." });
    } // Si el usuario no es admin, respondemos con un error 403
    



    next()
}

export default adminMiddleware;