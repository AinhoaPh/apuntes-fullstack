import{ v4 as uuidv4 } from 'uuid';

let contador = 0; // Inicializar un contador para llevar el seguimiento de las veces que se ha ejecutado el middleware

const uniqueIdMiddleware = (req, res, next) => {
    contador++; // Incrementar el contador cada vez que se llama al middleware
    const nuevoId= uuidv4(); // Generar un nuevo ID único
    console.log(`Middleware uniqueId ejecutado ${nuevoId} - ${contador}`); // Mostrar el ID único en la consola
    req.uniqueId = nuevoId; // Añadir el ID único al objeto de solicitud (c3853c98-0b95-431a-a272-1ece89215f23)
    next()
}

export default uniqueIdMiddleware;