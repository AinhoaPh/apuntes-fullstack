# Middlewares
funcion para modificar el (req,res)

Son funciones que se ejecutan en ek ciclo de vida de una peticion, tienen acceso a los onjetos de request y response(req,res) , y pueden modificar la peticion o la respuesta como finalizar la peticion o llamamr a la siguiene (NEXT)funcion de middleware


Se utiliza princ para:
- V alidar datos
- Procesar datos
- Subir archivos
- Autenticar/autorizar usuarios
- Manejar errores


## app.use(): para implementar Mild...

En un ruta especifica o en todas a ka vez .

ej:
```js
// Se aplica a todas las rutas/endpoints
app.use(express.json())

//bloquea compartir recursos entre dos servidores distintos(sist de seguridad)
app.use(cors())

//Se aplicas solo a esa ruta 
//app-use("/endpoint", express.static("carpeta-de-mis-archivos-estaticos")); // Middleware para servir archivos estáticos desde una carpeta específica
app.use("/uploads", express.static("uploads"))



```

## Midleware Comunes

- "body-parser": analizar el req.body, pero esta en desuso, ahora usamos "express.json()" y "express.urlencoded()",
- "cookie-parser": coockie( guarda info lo manda al servidor en vez de en ls). Cookie- parser sirve para analizar las cookies
- "express-session": para manejar sesiones(usa cookie-parser para poder manejar las sesiones)
- morgan:
-`cors`: CORS ( CrossOriginResourseSharing) permite hacer request ebtre dominios distintos

-`express.json()`: req.body en formato JSON
- `express.urlencoded()`: analiza el body en la peticion "x--www-form-urlencoded"(FORMS)
  * agregando la option `{extended:true}`permite q la info pueda ser mas compleja , perimite objetos y arrays ene l cuerpo de la peticion


  app-use(express.urlencoded({extended:true});)


## middleware personalizado
```js
// ejemplo de midleware personalizado

const setHeaders = (req,res, next)=>{
    res.setHeaders("Content-type", "application/json");
    next();// vayamos a la siguiente ruta en la cadena 
}


const saludar =(req,res, next)=>{
    console.log("Hola alguien esta haviend un request en /usuarios");
    next()
}
app.use(setHeaders)
//app.use("/usuarios", saludar)// saludar solo a los que sean usuarios 


// cadena de funciones qeu querramos ejecutar  paso a paso a seguir  uso de mddleware solo para la ruta usuarios en vez de sacarla fuera como arriba hacemos una cadena

app.get("/usuarios",saludar,  (req,res, next)=>{
   res.send("datos")// devuelve JSON porque se ejecuto en el middleware antes y se acaba el rpograma pro eso los middleware van antes
})


```

Ejemplos de Middlewares personalizados comunmenet vistos n proyectos espress:

- `auth.middleware.js`=> chequear a ver si el usuario ha inicado sesion antes de hacer un request
```js


app.get("/usuarios",auth,  (req,res, next)=>{
   res.send("datos")// devuelve JSON porque se ejecuto en el middleware antes y se acaba el rpograma pro eso los middleware van antes
})
```

- `admin.middleware.js`=> verificar si el usuario tiene perfil de admin
-`logger.middleware.js`=> deja un resgistro de todas las peticiones HTTP para monitorizar
- `errorHandler.middleware.js`=> manejar errores de las peticiones
-`validation.middleware.js`=> valida los datos de request antes de procesarlos( si todo esta bien escrito etc..
)
- `rateLimiter.middleware.js`=> limitar el numero de consultas en X tiempo ( consultas cada X tiempo etc)
- `cors.middleware.js`=> Funcion personalizada de permisos de CORS el cors() vacio permite  todo
- `upload.middleware.js`=> sube el archivo al servidor y lo procesa (multer)
- `cache.middleware.js`=> cache( datos qe se cargan mas rapids cuando vuelvo a cargar la pagna gracias a la memoria RAM) almacena info temporal para acelerar las consultas 
- `localization.middleware.js`=> locale, ln, ln18 (nos referimos al idioma)manejo de idioma y internacionalizacion.



# 📚 Middlewares en Express.js

## ¿Qué es un Middleware?

Un **middleware** en Express.js es una función que se ejecuta durante el ciclo de vida de una petición HTTP (request-response cycle). Tiene acceso a los objetos:

- `req` (request) → lo que el cliente envía
- `res` (response) → lo que el servidor responde
- `next` (función) → para continuar al siguiente middleware o controlador

Puede hacer tres cosas:
1. Modificar `req` o `res`
2. Terminar la respuesta (con `res.send()` o `res.json()`)
3. Llamar a `next()` para pasar al siguiente middleware

---

## 🧩 ¿Para qué sirve un Middleware?

Se usa comúnmente para:

- ✅ Validar datos
- 🧪 Procesar datos (transformar, sanitizar)
- 🗂️ Subir archivos
- 🔐 Autenticar/autorizar usuarios
- ⚠️ Manejar errores
- 🌐 Configurar CORS
- 📦 Usar caché
- 🌍 Manejar idiomas (i18n)

---

## 🧪 Sintaxis básica

```js
const middleware = (req, res, next) => {
  // Tu lógica aquí
  next(); // Pasa al siguiente middleware o al controlador
};

app.use(middleware); // Aplica a todas las rutas
app.get('/ruta', middleware, controladorFinal); // Solo para una ruta específica
```

---

## 🔧 Middlewares integrados de Express

```js
app.use(express.json()); // Permite leer el cuerpo en formato JSON
app.use(express.urlencoded({ extended: true })); // Permite leer datos enviados por formularios (x-www-form-urlencoded)
app.use(express.static('public')); // Sirve archivos estáticos como imágenes, HTML o CSS
```

---

## 🌐 Middlewares de terceros comunes

```js
const cors = require('cors');
app.use(cors()); // Habilita solicitudes entre dominios diferentes

const morgan = require('morgan');
app.use(morgan('dev')); // Muestra logs detallados de cada solicitud

const cookieParser = require('cookie-parser');
app.use(cookieParser()); // Permite acceder a las cookies

const session = require('express-session');
app.use(session({ secret: 'secreto', resave: false, saveUninitialized: true })); // Manejo de sesiones
```

---

## 🛠️ Middlewares personalizados (PASO A PASO)

### ✅ Ejemplo 1: Modificar cabecera de respuesta

```js
// PASO 1: Definir el middleware
const setHeaders = (req, res, next) => {
  res.setHeader("Content-Type", "application/json"); // Cambia tipo de respuesta a JSON
  next(); // Continúa al siguiente middleware o controlador
};

// PASO 2: Usarlo globalmente
app.use(setHeaders);
```

### ✅ Ejemplo 2: Middleware de saludo

```js
// PASO 1: Crear el middleware
const saludar = (req, res, next) => {
  console.log("Hola, alguien hizo un request en /usuarios");
  next(); // Continúa
};

// PASO 2: Usarlo solo en una ruta
app.get("/usuarios", saludar, (req, res) => {
  res.send("Datos de usuario");
});
```

---

## 📁 Middlewares personalizados típicos en proyectos

### 1. `auth.middleware.js` (Autenticación)

```js
const auth = (req, res, next) => {
  if (req.headers.authorization) {
    next(); // Autorizado
  } else {
    res.status(401).json({ error: "No autorizado" });
  }
};
```

### 2. `admin.middleware.js` (Solo admins)

```js
const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next(); // Es admin
  } else {
    res.status(403).json({ error: "Acceso denegado" });
  }
};
```

### 3. `logger.middleware.js` (Logs de peticiones)

```js
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Siguiente paso
};
```

### 4. `errorHandler.middleware.js` (Manejo de errores)

```js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Muestra el error en consola
  res.status(500).send("¡Algo falló!");
};
```

### 5. `validation.middleware.js` (Validación básica)

```js
const validate = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ error: "El nombre es obligatorio" });
  } else {
    next(); // Todo bien
  }
};
```

---

## 🔗 Usar múltiples middlewares en cadena

```js
// Protegemos una ruta con varios middlewares en orden
app.get("/admin", auth, admin, logger, (req, res) => {
  res.send("Panel de administración");
});
```

---

## 📌 Buenas prácticas

- Llama siempre a `next()` si no respondes directamente.
- El orden importa: el middleware se ejecuta en el orden que lo defines.
- Puedes aplicarlos globalmente (`app.use`) o por ruta específica.

---

## 🧪 ¿Quieres probar?

Copia estos ejemplos en un archivo `app.js` de un proyecto Express y ejecútalo con:

```
npm init -y
npm install express morgan cors cookie-parser express-session
node app.js
```

---

```js

// app.js - Archivo principal

const express = require("express");
const app = express();
const PORT = 3000;

// Middlewares propios
const setHeaders = require("./middlewares/setHeaders");
const saludar = require("./middlewares/saludar");
const auth = require("./middlewares/auth");
const admin = require("./middlewares/admin");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const validate = require("./middlewares/validate");

// Middlewares de terceros
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// Middlewares nativos de Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middlewares de terceros configurados
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());
app.use(session({ secret: "secreto", resave: false, saveUninitialized: true }));

// Middlewares personalizados globales
app.use(setHeaders);

// Ruta protegida con middleware en cadena
app.get("/admin", auth, admin, logger, (req, res) => {
    res.send("Bienvenido al panel de administraciÃ³n");
});

// Ruta que usa validaciÃ³n
app.post("/crear", validate, (req, res) => {
    res.json({ mensaje: `Nombre recibido: ${req.body.name}` });
});

// Ruta con saludo
app.get("/usuarios", saludar, (req, res) => {
    res.send("Ruta de usuarios");
});

// Middleware de manejo de errores
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

```

Ej 1: Middleware  de UUID `middleware/uniqueid.middleware.js`

middleware que genere un UUID para cada peticion y alamacena en el objeto `req`baj la propiedas `requestId`
Se tiene que aplicar a todas las rutas 

Ej 2: Middleware Authetication 
crea un midleware qe cerifique si el user esta identificado, asume qu el user esta autenticado con propiedad"user" en el objeto req
solo se aplica a "/alumnos"

Ej 3: Middleware Admin
un Midd que veriificque si el user es admin y aasume qu el user esta autenticado con propiedad role con el valor "admin" esta ruta solo se aplica a POST

Ej 4: Middleware Validacion
Crea un Midd que valide que el uerpo de la solicitid tenga un prop "nombre" y un "curso" con valores validos Si no tiene esta prop envia un arespuesta 400 y error

Ej 5: Middleware Limiter

Midd que limite el numero de solicitudes PAra simplificar 

