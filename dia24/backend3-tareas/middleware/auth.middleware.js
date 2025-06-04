const authMiddleware = (req,res,next)=>{
     req.user = {nombre:"Blue"}
    if (!req.user) {
        return res.status(401).json({ error: "No autorizado" });
    }
    console.log(`Soy${req.user}`)
    next();
}

export default authMiddleware;
