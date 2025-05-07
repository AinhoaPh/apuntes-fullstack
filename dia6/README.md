
# React Developer Tools

Extension para FireFox y Chrome
Permite ver el arbol de componentes de React desde la pantalla Components
Permite ver el estado y las props de cada componente asi como su jerarquia 

# Prop Children 

 Manda info cerrando la etiqueta y todo lo que este dentro de la etiqueta es children.

 ```jsx
 <Card fecha="2025-05-04">
 <h1> </h1>
 <p/>
 </Card>
 ```

 # Spread Operator "..."

- Lo que hacemos es una copia de las propiedades del objeto y no una refeencia al objeto original.
- Podemos enviar todas las propiedades de un objeto como props con el operador "..."
```js
const userData = {
    nombre: "Marta",
    edad: 23,
    ocuoacion: "Estudiante"
}
 const App = ()=>{
    return (
        <div>
        <TarjetaUsuario {...userData}/>
        </div>
    )
 }
 const TarjetaUsurio = ({nombre, edad, ocupacion})=>{
    return(
        <div>
        <h2>{nombre}</h2>
        <p>{edad}</p>
         <p>{ocupacion}</p>
        </div>
    )
 }




 // EJEMPLO 2


 function Perfil(props){
    return(
        <Avatar {...props}>
    )
 }
```


# Uso de Map()

- Recorrer un Array, sino que tambien lo recorre y muestra datos en pantalla.
- Utilizamos Map y no for Each, porque forEach no hace return 
- Podemos omitir el return y las llaves si la funcion es de una sola linea dentro del map
- Recordar utilizar la propiedad `key` para cada elemento de la lista en su etiqueta principal. en la primera etiqueta 
- Dentro de los Maps no utilizar fragmentos como etiqueta principal <></>.
- En caso de no tener un id, se puede utilizar con key una combinacion de propiedades o incluso alguna libreria como por ejm `uuid`(nos genera un indice unico para cada elemento).( npm i uuid , y luego se importa la libreria import ... from ...)
- Como ultima opcion (no recomendable) se puede utilizar el indice como key, siempre y cuando el Array no cambie su orden o se eliminen elementos, ya que puede causar errores de interfaz de usuario (UI).


```jsx
const App = ()=>{
    const Items = [
        {id:"a", nombre: "item 1"},
         {id:"b", nombre: "item 2"},
          {id:"c", nombre: "item 3"},
           {id:"d", nombre: "item 4"}
    ] 
    return(
        <ul>
        {
            Items.map((item)=>(
                <li key={item.id}> 
                {item.nombre}
                </li> ))
        }
            </ul>
    )
}

```


Usar solo si no se va a modiicar:
```jsx
const App = ()=>{
    const Items = [
        {id:"a", nombre: "item 1", fecha="2025-05-04"},
         {id:"b", nombre: "item 2", fecha="2025-05-05"},
          {id:"c", nombre: "item 3"},
           {id:"d", nombre: "item 4"}
    ] 
    return(
        <ul>
        {
            Items.map((item, index)=>(
                <li key={index}> 
                {item.nombre}
                </li> ))
        }
            </ul>
    )
}

```

# Estilos en JSX
 
 Inline Styles:
  - Podemos apicar estilos a nuestras etiquetas usando el atributo `style`y pasando un objeto con las propiedades de CSS en `camelCase`.
  - Podemos crear una constante con kis estilos y aplicarlos al elemnto 
- Al usar inline Style hay que usar `{{}}`
  
  
```jsx

function App(){
    const estilosContainer={
        backgroundColor= "blue",
        color:"white",
        fontSize: "24px"
    }
    return (
        <div>
        <h1 style={{fontSize:"24px"}}></h1></div>
    )
}

```

# Estilos externos 

- Utilizamos la palabra `ClassName` porque esta reservada para JS

```jsx
// Las reglas se aplicana todo el proyecto.
import '@/css/main.css'

function App(){

    return (
        <div className="contenedor">
        <h1 style={{fontSize:"24px"}}></h1></div>
    )
}

```
- Para usar CSS Modules, debemos crear un archivo con la extension `module.css`y luego importarlo en ele componente 
- No afecta al resto. solo a esa parte 

```jsx
// Import de Css como Modulo
import styles from './Saludo.module.css'

function App(){

    return (
        <div className={style.contenedor}>
        <h1 className={style.titulo}>Hola Mundo</h1>
        </div>
    )
}