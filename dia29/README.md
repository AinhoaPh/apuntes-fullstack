# Next JS ( framework)
back y front

Tipo de router:
- usar  el App ROuter que el Pages ROuter 

Instalaciion 
```bash 

npx create-next-app@latest

# elegir nombre, js, eslint, tailwind, src, aoo router, turbopack

npm run dev 


```

# Render en Cliente ("use client") vs servidor ("use server")

- En Next JS por defecto los componentes se denderizan en el serv idor 
- podemos renderizarlo usando use server y client
- Si deseamos usar hooks debemps usar use client para dicho componente 
- Los server actins en use Server
- Los componenetes con async await deben ser renderizados en el sservidor 

# Ruteo 

- "src/app"
- "app/home"=>"/home"
- Todas las carpetas fuera de app no son accesibles por el router
- <Link href=""> para navegar entre paginas
- <Link href=""> para navegar entre paginas con etiqueta de boton dentro pra que tenga estils de boton
- todos los archivos dentro de app son para generar UI (page.js, layout.js, erro,js)
- para construir segmentos dinamicos itilizaremos conchetes /home([slug]/page.jsx. selee usando asyn y await)

```js
// servidor componente /blog/[id]/page.jsx
const BlogSimple = async ({ params }) => {
    const { id } = await params;
  
    return (
        <>{id}</>
    )
    }

```

# Variable de entorno

- Alamcena info sensible
- almacenan info dependiendo el entorno 
```bash
#  .env
# com'ponenete servidor
DB_USER="mi-usuario"
DB-PASS="1234"

#contenete cliente 
Next_PUBLIC_USER="mi-usuario-publico"

# servidor backend
NEXT_PUBLIB_BACKEND_API="https://localhost:3000/api/v1


```

```js

const user = process.env.DB_USER // lo devuelve vacio
```

# Actividad 
- Ejecutar dos servidores a la vez (next js en puerto 3000 y Express en 3001 )
- crear entorno (.env y.env.example) con NEXT_PUBLIC_API_URL
- Crear ruta de Usuarios y traer y listar  en tarjetas usuarios nuestro REST API + Mongo DB

