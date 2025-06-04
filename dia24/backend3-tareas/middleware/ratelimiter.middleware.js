
let requestCount = 0;

const rateLimitMiddleware = (req,res,next) => {
  requestCount ++;

    console.log(`Número de solicitudes: ${requestCount}`);

  if(requestCount > 5){
    return res.status(429).json({ error: "Demasiadas solicitudes. Por favor, intente más tarde." });
  }

    next();
}
 
export default rateLimitMiddleware;