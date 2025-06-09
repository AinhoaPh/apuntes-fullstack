# REACT + VITE

Crear un .env y .env.example 

.env: informacion sensible
 creamos el usuario contraseña mas las variables del entorno.(url) + config + el puerto + el dominio( localhost en desarrollo y dominio real pag subida)

.env exam. los ejemplos


# Variables de entrono 

- Los entornos son espacion de trabajo en base a mi funcion algunos entornos: desarrollo, testing, produccion
- Las variables para cada entormo de escriben en un archivo ".env" en la raiz del proyecto
- Nuestro proyecto pude incluis un archivo dde ejemplos ".env.example" 
- .env en .gitignore-> ( node_modules , .env* )

.env:
.local
.production.local
.testing.local
.development.local


# Leer archivos de entorno en Express
DB_
```js
import dotenv from 'dotenv'
dotenv.config();

const {DB_USER, DB_PASS}= process.env; // 

const DATABASE = process.env.DATABASE

```

# Leer archivos de entorno en VIte
Todas las variables de enetorrno comienzan con VITE_

```js
const {VITE_BACKEND_API, VITE_BACKEND_IMGS_URL}= import.meta.env

console.log(VITE_BACKEND_API);// https://localhost:3000/api/v1

// OBTENER IMG DE BACKEND PUBLIC
console.log(VITE_BACKEND_IMGS_URL);// https://localhost:3000/imgs


```

