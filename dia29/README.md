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

- Crear un formulario para crear nuevos usuarios 

- Implementar 


# Estils con CSS modules

Estilos que se aplican solo a un componente 

```css
/* app.module.css
 CSS exclusivo para ek componenete que lo importe */


```

```js

import styles from './app.module.css'

const Componente = () =>{
    return (
        // nos devuelve una clasepersonalizada 
        <p className={style.red}>Mi texto </p>
    )
}
```

# Paginas especiales 

# Actividad 
1. Obtener el endpoint de una pelicula por su id 152601

2. Ancho 400: 
`https://image.tmdb.org/t/p/w400/`

3. BUscar el endpoint para obtener las peliculas que esten por sali
`https://api.themoviedb.org/3/movie/upcoming`

`https://api.themoviedb.org/3/movie/upcoming?api_key=<your_api_key>`

4. Lista de top rated

`https://api.themoviedb.org/3/movie/top_rated`

5. Lista por categorias

`https://api.themoviedb.org/3/genre/movie/list`
6. Endpoint para traer ciencia ficcion
`https://api.themoviedb.org/3/discover/movie?with_genres=878`

7. peliculas 2025 de mas popu a menos 

`https://api.themoviedb.org/3/discover/movie?primary_release_year=2025&sort_by=popularity.desc`
8. Endpoint ciencia ficciom com ,as de 8 puntos con mas de 1000 votos ordena de mayor a menor con mas 1000 votos 

`https://api.themoviedb.org/3/discover/movie?with_genres=878&vote_average.gte=8&vote_count.gte=1000&sort_by=popularity.desc`
9. Todas las peliculas que contengas la palabra Matrix

`https://api.themoviedb.org/3/search/movie?query={query}`
`https://api.themoviedb.org/3/search/movie?api_key={api_key}&query={query}`
