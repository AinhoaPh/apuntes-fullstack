const validateMiddleware = (req, res, next) => {

        const {nombre,curso} = req.body;

        
        if (!nombre || !curso) {
            return res.status(400).json({ error: "Faltan datos requeridos: nombre y curso." });
        } // Si faltan datos, respondemos con un error 400
    next();
 
}
 
export default validateMiddleware;