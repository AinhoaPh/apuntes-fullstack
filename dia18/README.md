# React-royer

conecta a url con el renderizado de dentro de la pag

```bash
npm i react-router
```

Modo declarativo es el modo mas sencillo, y utiliza etiquetas para armar las rutas 
- en Main.jsx senecesita utilizar<BrowserRouter>
- en App.jsx armamos la navegacion con <Link> y <NavLink>
- <NavLink> posee el estado de className="active en el link activo
- Las rutas se pueden anidar entre si <Route><Route></Route>
- El aributo `index` es oara indicar la ruta principal 




Es una libreria que se encarga de manejar las rutas de nuestra aplicacio. Esto significa que actualiza leer las rutas de la URL y rendereiza e compoennet correspondiente 

Hay 3formas de utilizarlo 
https://reactrouter.com/start/modes

>Declarativo: "Utlizando etiquetas": Es el mas sencillo de implememetar 
>Data Mode: "REquiere un objeto de configuracion para las rutas "
>Framework: "esel mas completo y similar al que utilizan otros Frameworks (NExt /remix...)

-<BrowserRouter>:funcion afuera de app, es el proveedor o etiqueta contenedora con las ffuncionalidades de nuestro Router

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```
<Routes>: contenedor de nuetsras rutas (Route)

```jsx
import Pokemon from './pages/Pokemon';
import Productos from './pages/Productos';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/pokemon">Pokémon</Link>
        <Link to="/productos">Productos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Página de inicio</h1>} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="*" element={<h1>404: Página no encontrada</h1>} />
      </Routes>
    </>
  );
}
```
<Route>:Es la etiqute a donde se definde el segmento de ruta e indica que componente renderizar

<Link> y <NavLink>: etiquetas de <a> en vez de usar href, usa "to" y la diferencia es que ninguna recarga la pagina agrega una clase o un className de active al elemento que coincida con la URL actual , es util para darle estilos a nuesros elemtnos de navegacion 

```jsx
<NavLink to="/pokemon" className={({ isActive }) => isActive ? "active" : ""}>
  Pokémon
</NavLink>
```


```jsx
<nav>
  <Link to="/">Inicio</Link>
  <Link to="/pokemon">Pokémon</Link>
  <Link to="/productos">Productos</Link>
</nav>

```
Creacion de un componente de Error: si lo ponemos fuera de route aparace en toda la pantalla dentro de Route en un cachito
`<Route path="*" element={<Error/>}/>` Usando "*" podemos renderizra el componenete Error sino coincide con ninguna de las rutas anteriores

-`Layout`:
Maquetacion de nuetsr pagina que contene elementos comunes para sus sub-rutas.EL papa de las rutas y dentro estan las subrutas y solo desde el papa se puede acceder a esas subrutas.Las rutas hijas se cargan en la etiqueta <Outlet/>

-`Outlet`:
Componenete que se utiliza dento de los `layout` y se encarga de renderizar el componenete de la subruta elegida . se imprime nuestra sub-ruta dashboard, config, logout imprime/carga toda la informacion de los componenetes en el <Outlet/> Layout son las rutas y outlet es la info/contenido de las rutas

<Header>
</Header>
<main>
<Sidebar>
</Sidebar>
<Outlet/>
<main>


## Uso de useParams y useSearchParams

-React-router tiene sus propios hooks de parametros
- pathName o SearchParams

"useParams":
Nos permite leer los parametros de la url, es un segemento de la URL y se crea usando el Route con `<Route path="/usuarios/:id"/>`, recordar poner ":" enfrente del parametro

>Se lee utilizando :
`const{idn nombre}= useParams()`para leer la variable `<Route path="/usuarios/:id"/>`

" useSearchParams":
>Nos pemrite leer los parametros de busqueda de la URL, EJ: `/usuario?name=juan&lastname=Perez` En este caso el parametro es todo lo que esta despues de "?"-> name=....
```jsx
    const [searchParams,setSearchParams]= useSearchParams();
    const precio = searchParams.get("precio");// precio = lo que valga
    const dist = searchParams.get("dist");// ? dist= a o que sea

   
    <button onclick={handleUpdate}><button/>

    const handleUpdate= ()=>{
         searchParams.set("dist",500)// -> dist valdra 500
          searchParams.set("precio",33)// -> precio valdra 33
        setSearchParmas({
            precio:33,
            dist:500
        })//-> se actualiza el filtro en tiemporeal con esta funcion 
        setSearchParams(searchParams)
    }



```
```jsx
const Contact = () => {
    // hook useParams de react-router para leer el pathName

        // Viene de <Route path="/contact/:contactId"/>
    // const {contactId} = useParams();

    // Uso de SearchParams: array de elementos

    const [searchParams]= useSearchParams();
    const precio = searchParams.get("precio");// precio = lo que valga
    const dist = searchParams.get("dist");// ? dist= a o que sea


   
  

    const handleUpdate= ()=>{
         searchParams.set("dist",500)// -> dist valdra 500
          searchParams.set("precio",33)// -> precio valdra 33
        setSearchParmas({
            precio:33,
            dist:500
        })//-> se actualiza el filtro en tiemporeal con esta funcion 
        setSearchParams(searchParams)
    }



    return ( <>
    <h1>Soy Contact</h1>
    <h3>Uso de Route Params (useParams)</h3>
    <p> 
        probar usar url"/contact/:contactId" <br/>
        ej:
        <Link to="/contact/jhon-123">/contact/jhon-123</Link>
    </p>

    {contactId && <p>El id de contacto es : {contactId}</p>}

    <h3>Uso de searchParams</h3>
    <p>Probar a agregar los siguientes searchParams:</p>
    <ul>
        <li>?dist={dist}</li>
        <li>?precio={precio}</li>
    </ul>
      <button onclick={handleUpdate}><button/>
    </> );
}
 



```

## useNavigate

Nuestro codigo va de una seccion a otra, Cuano queremos que de manera programatica se navege de una pag a otra 
>Luego de hacer a un submit para que vaya a otra pagina
> Cerrar la sesion de usuario
>Timeout o quizes, guarda el formulario y que te lleva aotra pag

## Hooks que se utilizaran menos a partis de React 18

- useEffect a la hora de traer datos se emepazo a usar emnos gracias React Server components (NextJS)
- useMemo y useCallBack genera codigo mas complejo y hoy el compilador dse encarga de optimilzari auto.Se usa solo cuado son real,emete necesarios  

## Hooks que sigue siendo importantes

- useState: Fundamental para conservar ek estado de nnuetsro componenete.
- useContext: Para manejar el estado Global de nuestra aplicacion como <browserRoute>
- useReducer: Para amnejare le stadod enuestra aplocaion pero de una manera mas compelja 
 > https://react.dev/reference/react/useReducer
 > Similar aloq ue realiza la librria de stados global `Redux`
 > Para manejar estados globales `Zustand`
 - useRef: Maneja referencias a os ele,emtos del DOM y a otrros que no son parte de nuetro componenete 

 ## Hook useRef 
 Conserva la informacion entre renderizados al igual que State pero se diferencia en que no provoca un rerenderizado cuando lo actualizamos 

 > Se usa `const valor = useRef();`
 > useRef devuelve un OBJETO y su propiedad se lee "valor.current"{current:value}
 > Todas las etiquetas HTML poseen un atributo "ref" que permitie acceder a este elemento
 > Es lo mismo que un querySelector()

1.	Acceder directamente al DOM (como una etiqueta <input> o un <div>).
2.	Guardar un valor persistente que no causa un renderizado cuando cambia (como un contador interno o una referencia entre renders).


```jsx

import { useRef } from 'react';

const MiComponente = () => {
  const miReferencia = useRef(valorInicial);

  return (<input ref={miReferencia} />;)
};
```

Ej1 Hacer foco automatico en un input sin utilizae useState y que se seleccione automaticamente cuando aparece elcompoennet use ref + use effect
```jsx
import {useRef, useEffect} from 'react'
function autoFocusInput(){
    return ()
}


```
Ej2: valor previo: Mostrar el valor anterior de un contador de useState sin usar use State extra 
```jsx

function ValorPrevio(){
    return (
        <>
        <p> Actual: {count}</p>
        <p>Anterior: {}</p>
        <button onClick={()=>sertCount(c=>c+1)}>Incrementar</button>
        </>
    )
}


```

ej3: Deshabiitar clicks rapidos con un bloqueo temporal maxi 1 click


Videoplayer:
COntrolar un video con play/pausa
`https://www.w3schools.com/html/mov_bbb.mp4`

ej5: Detectar un click fuera de un componente craer un alert cuando haga click fuera 

```jsx
export function ClickOutside() {
¡
    return (
      <>
      <h3>CLick Outside</h3>
      <div style={{border:"1px solid", padding:20}}>
      Haz click fuera del elemento 
      </div>
   
        <button onClick={handlePause}>Pausa</button>
      </>
    )
}


```