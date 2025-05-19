# Hooks

Son funciones que nos permiten agregar estados u otras caracteristicas especificas a REACT en los componentes funcionales. Se los considera Super Poderes de REACT 

Algunos de ellos:
`useState, useEffect, useReducer, useCallback, useRef`

Vamos a poder crear nuestros propios hooks perrsonalizados sino los llamados `Custom Hooks`

useState es el mas importante y el mas utilizado de los hooks . Ya que nos permite añadir un "Estado(valor)" a nuestro componente .
Cada vez que realicemos un camde estado el componente se va a volver a renderizar.

```js
// ejemplo de una funcion que devuelve un array con un valor y un setter

const useState = ( valorInicial) =>{
    let valor = valorInicial;

    const state = ()=>valor;
    const setState = (nuevoValor)=>{
        console.log(`El nuevo estado es:${nuevoValor}`);
        valor= nuevoValor;


        renderizarComponente();
    }
    return[state,setState]
}

const [valor, setValor]= useState(5); // deconstruccion de una lista 
const [numero, setNumero]=useState(10);
const [mascota, setMascota]=useState("Blue");


console.log (valor());//5
setValor(10);
console.log(valor());//10 se ha sincronizado con el nuevo valor 
```

# Hook: useState

Permite a los componentes tener un "Estado" local como si fueran `variables inteligentes`.

- Hara un re-render del componente cada vez que se actualice el estado.
- Conserva su valor entre cada renderizado de la nueva variable.
- Se puede usar multiples veces en un mismo componente, para manejar diferentes estados. 

 caracteristicas: 
1. Devuelve un array con 2 elementos: el valor actual del estado y una funcion para actualizarlo.
2. Acepta un argumento opcional que es el valor incial del estado
3. Cada vez que cambia el estado del componenete se vuelve a renderizar
4. Al actualizar un estado que depende del estado anterior se recomienda crear una funcion de CallBack con `prevState`en lugar de un valor directo (pregunta el valor y lo usa) se usa siempre den form

```jsx
// ejem1
setCounter( prev=> prev+1);


// ejem 2
setValue(prevList => ({
    ...prevList,
    newData
}))


```

```jsx
import{useState} from 'react'

const App = ()=>{
    const [valor,setValor] = useState("valorInicial")
}


```
- Valor: variable que contiene el valor actual de estado
- setValor: Funcion para actualizar el nuevo valor del estado
- valorInicial: Valor con el que comienza nuestra variable

1. Contador simple: 
crear un componente con un boton que cada vez que le hago click incrementa el valor n uno 

2. Lista de tares
crear un componente de input + un boton de agregar para ir agregando tareas a nuetsra lista en la parte inferior imprimir todas
3. lista tareas
4. eventos
5. form
6. galeria de imagenes
crear una gaelria donde el usuario pueda navegar entre un array de imagenes con un boton para avanzar de imagen y con otro para retroceder un carrusell si llego a la primer vuelvo a empezar 
7. Jueg de adivinanza
Desarrollar un juego donde el usuario intente adivinar un numero aleatorio entre 1 y 100 que el juego devuelva pistas de mas alto o mas bajo hasta adivinar el numero 
8. Temporizador
9. Calculadora
unificar los states similares en un formData y crear una funcion handleChange para actualizar los resultados 

10. Carrito de compra
los usuarios añaden items ingresando el nombre y el precio el carrito debe mostrar el total y la cantidad de items agregados
Ivestiguen el metodo reduce para calcular el total con reduce: el array a un valor
si el precio supera los 100 euros agregar color rojo al total

Agregar boton para finalizar compra y que o Agregar un check box que pregunta si quiere envio a domicilio 
```jsx
// import TarjetaUsuario from './components/TarjetaUsuario'
// import ListaTareas from './components/ListaTareas'
// import PerfilUsuario from './components/PerfilUsuario';
// import GaleriaImagenes from './components/GaleriaImagenes';
// import BlogPost from './components/BlogPost';
// import Tarea from './components/Tarea'
import { use, useState } from 'react'
// import UserCard from './components/UserCard'
import './App.css'

function App() {
  return (
    <>
      <ContadorSimple />
      <InterruptorOnOff />
      <EventosInput />
      <ListaTareas />
      {/* <TarjetaUsuario /> */}
      {/* <PerfilUsuario /> */}
      {/* <GaleriaImagenes /> */}
      {/* <BlogPost /> */}
      {/* <Tarea /> */}
      {/* <UserCard /> */}
    </>
  )

}
const ContadorSimple = () => {
  const [num, setNum] = useState(0)

  const handleSumar = () => {
    setNum(num + 1);
  }

  const handleReset = () => {
    setNum(0);
  }
}
const InterruptorOnOff = () => {
  const [isOn, setIsOn] = useState(false);//dependiendo si quiero empezar como encendido o apagado 
  const handleClick = () => {
    setIsOn(!isOn);// ! = cambiar el estado sino es igual cambialo
  }
  const darkStyle = {
    backgroundColor: "black",
    color: "white",
  }
  const lightStyle = {
    backgroundColor: "white",
    color: "black",

  }

  const buttonStyle = isOn ? darkStyle : lightStyle;
  return (
    <div >

      <h2>Interruptor On / Off</h2>
      <button
        style={buttonStyle} //  otra opcion
        // className={isOn ? "light" : "dark"} una opcion
        onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
      {isOn ? "Luz encendida" : "Luz apagada"}
    </div>
  )

}

const EventosInput = () => {
  const [mensaje, setMensaje] = useState("Hola a todos");
  const [showImage, setShowImage] = useState(false);
  return (
    <div>
      <input
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}// e de evento y obtenemos el valor con target que es el input y value el valor 
        onMouseOver={() => setMensaje("El mouse esta sobre el input")}
        onMouseOut={() => setMensaje("El mouse ya no esta sobre el input")}
      />
      {mensaje}

      {showImage && <img src="https://via.placeholder.com/150" alt="placeholder" />} // en onMouse si showImage es (true) se muestra la imagen y si es false no se muestra
    </div>
  )
}
const ListaTareas = () => {
  // el valor de nuestro input
  const [tarea, setTarea] = useState("");

  // el valor de nuestra lista de tareas
  const [listaTareas, setListaTareas] = useState(["tarea 1", "tarea 2", "tarea 3"]);
  const handleAgregarTarea = () => {

    setListaTareas([...listaTareas, tarea]);//copiamos la lista de tareas + tarea 
    setTarea("");//limpiamos el input

  }





  return (
    <div>
      <h2>Lista de tareas</h2>
      {/*Formulario para agregar tareas */}
      <input
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />
      <button onClick={handleAgregarTarea}> Agregar</button>

      {/* Lista de tareas */}
      <ul>
        {
          listaTareas.map((tarea, idx) => {
            return (
              <li key={idx}>{tarea}</li>
            )
          })
        }
      </ul>
    </div>
  )
  return (
    <>

      <h1>Contador Simple</h1>
      <h2>num vale: {num}</h2>

      <h2>Opcion 1</h2>
      <button onClick={() => setNum(num + 1)}>Incrementar</button>
      <button onClick={() => setNum(num - 1)}>Decrementar</button>

      <h2>Opcion 2</h2>
      <button onClick={handleSumar}>Incrementar</button>
      <button onClick={() => setNum(num - 1)}>Decrementar</button>

      <h2>Reset</h2>
      <button onClick={handleReset}>Reset</button>

      <h2>Interruptor On / Off( cambia el color del fondo)</h2>
      <button onClick={handleClick}>ON/off</button>








    </>
  )

}
export default App





```