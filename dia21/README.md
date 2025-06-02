# Backend

node permite ejuecutar JS en el Backend
Es un framework para node que simplifica el proceso de creacion de app web y APIs por es rapido y minimalisra facil de parender con muchos recusos disponibles y es altamente extensible con middleWares
# Instalacion
```bash
npm i pnpm -g
```
```bash
#si a tdodo...
npm init -y
```

Hay otros frameworks:
- NestJs (front y back)
- Feathers
- AdonisJs = laravel

El backend es el encargado de procesar toda la información que alimenta a un frontend. Se compone de marcos, bases de datos o códigos. Para que un sitio web o aplicación opere efectivamente, se requiere mucha información y datos que se almacenan en «la parte trasera» de un sistema informático. En oposición al frontend, el usuario no puede ver o acceder a esta información.

## Funciones clave del backend
- Procesar y responder solicitudes del frontend.
- Administrar bases de datos y asegurar la integridad de la información.
- Autenticar y autorizar usuarios (gestión de sesiones, tokens, etc.).
- Ejecutar lógica de negocio, como cálculos financieros o reglas de validación.
- Gestionar APIs y conexiones con servicios externos.

## Importancia del Backend
El backend es esencial para garantizar que una aplicación sea segura, rápida y eficiente. Algunas razones clave de su importancia incluyen:

- Seguridad y autenticación: protege los datos de los usuarios con sistemas de autenticación y encriptación.
- Escalabilidad: permite manejar grandes volúmenes de datos y solicitudes sin afectar el rendimiento.
- Integración con bases de datos: almacena, recupera y gestiona información de manera estructurada.
- Conectividad con APIs y servicios externos: permite la comunicación con otros sistemas, como pasarelas de pago o redes sociales.
- Automatización de procesos: ejecuta tareas de fondo como envíos de correos, generación de reportes y procesamiento de datos.
package.json
"scripts"{
    "dev":"nodemon index.js",
    "start":"node index.js"
}:

# Metodos HTTP

- GET : obtener registros, pedir informacion ymandar al servidor 
- POST: crear un nuevo registro
<form method="GET/POST">
- PUT: Reemplaza un registro existente
- PATCH: Acutualiza un registro (cambiar algun valor o lo que sea)
- DELETE: ELimina

Aclaraciones:
- Se usa PUT como PATCH
- Puedo usar cualquier metdoo para cualquier accion

## Para probar distintos request usarems Rest CLients 

- Entre los mas conocidos tenemos a el mas usado: 
`Postman`,`Insomnia`, `Postman`, `Thunder Client`->(localhost...), `cURL`,`REST Client`-> archivo de pruebas (### ...)

## REquest 

El objeto req contiene toda la info de la peticion HTTP proveniente del frontEnd. Algunos de los atributos mas comunes son:
- req. params:Parametro de la URL -> /users/:nombre del objeto
                                    const nombre=req.params.nombre
   del objeto requst me devuelve el nombre
- req. query: SearchParams / Parametros de busqueda los que vienen luego del interrogadr  -> ?edad=33&distancia= 20
si quiero leer los valores de las variables ?.....&....

app.get("productos/:categoria",(req,res)=>{}) las variables las manda el usuraio y para leerlo con req.query 

const {dist}= req.query
- req.body:  Cuerpo de la peticion ( para POST, PUT, PATCH etc)
- req.headers: Cabecera de la peticion 

# 🛠️ Backend con Node.js y Express

Este proyecto es una base para crear APIs y aplicaciones web utilizando **Node.js** y el framework **Express**. Aquí encontrarás una guía clara paso a paso sobre cómo comenzar, qué herramientas usar, y cómo funcionan los conceptos fundamentales del backend.

---

## 📌 ¿Qué es el Backend?

El **backend** es la parte del sistema que no es visible para el usuario. Se encarga de:

- Procesar solicitudes del frontend.
- Administrar bases de datos.
- Ejecutar lógica de negocio.
- Autenticar usuarios y proteger la información.
- Conectarse a servicios externos (APIs, pagos, etc.).

---

## ⚡ ¿Qué es Node.js?

Node.js es un **entorno de ejecución para JavaScript en el servidor**. Permite escribir código backend usando JavaScript y se caracteriza por:

- Ser rápido y eficiente.
- No bloqueante.
- Ideal para crear APIs y servidores.

---

## 🚀 ¿Qué es Express?

**Express** es un framework web minimalista para Node.js que:

- Simplifica la creación de servidores web y APIs REST.
- Es fácil de aprender.
- Soporta middlewares.
- Tiene gran comunidad y recursos disponibles.

---

## 📦 Instalación y Configuración

1. **Instalar PNPM (opcional):**
   ```bash
   npm i pnpm -g

   npm init -y

   npm install express

   ```
   /mi-proyecto
├── index.js
├── package.json
└── node_modules/


```js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para leer JSON

app.get('/', (req, res) => {
  res.send('¡Hola desde el backend!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

```
```json

"scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
}
```

# Codigo de estado HTTP

 Rango de 200-299: Peticion exitosa
 Rango de 300-399: Redireccion
Rango de 400-499: Errores que ha tenido la peticion por parte del cliente
Rango 500-599: Error en la consulta del servidor

200 OK          ->
201 Created     -> Registro creado/resource 
204 NO content  -> REspuesta vacia algunos lo utilizan cuando eliminan un registro

400 Bad Request -> Peticion invalilda por el cliente(com decir que cree una tarea sin darle la tarea)
401 UNAUTHORIZED->No esta autorizado(queremos hacer algo pero aun no inicie sesion seria , token invalido)
403 FORBIDDEN   ->No tiene permiso(el usuario si inicia sesion peron o tiene los permisos suficientes)
404 NOT FOUND   -> No se encontro el rgistro o el archivo

500 INTERNAL SERVER ERROR -> Error interni(fallo inesperado ene l servidor)

res.status(numero).json


# Crear backend3-tareas

- Crear nuevo proyecto para ocmparrir ontenido estaticp

# Para cargar una pagina statica 

app.use("/imgs", express.static("public/imgs")); 
