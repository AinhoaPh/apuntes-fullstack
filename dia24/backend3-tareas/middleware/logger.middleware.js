/**
 * Registro de peticiones HTTP: Logger
 * Crear un array vacion llamado logs en data/logs.js 
 * el midd almacena info como:
 * - fecha y hora de la peticion
 * - metodo utilizado(GET, POST, PUT, DELETE, etc.)
 * - URL peticiona
 * - User agent de cliente
 * */ 

import { logs } from "../data/logs.js";

// Middleware para registrar las solicitudes HTTP
// Este middleware se ejecuta en cada solicitud y registra información sobre la misma

const logMiddleware = (req, res, next) => {
    const logEntry={
        id: req.uniqueId, // ID único generado por el middleware uniqueIdMiddleware
        date: new Date().toISOString(), // Fecha y hora actual en formato ISO
        method: req.method, // Método de la consulta HTTP de la solicitud (GET, POST, etc.)
        url: req.originalUrl, // URL solicitada
        userAgent: req.headers['user-agent']// User agent del cliente que realiza la solicitud: 
        // Información del navegador o cliente que realiza la solicitud
    }

    // console.log(logEntry)
    logs.push(logEntry); // Añadir la entrada de log al array de logs inserto el objeto en mi base de dtos 
    next(); // Llamar a next() para pasar al siguiente middleware o ruta
}

export default logMiddleware;