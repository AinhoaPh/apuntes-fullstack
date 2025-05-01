
//1. Importar nuestros elementos (librrias componentes estilos )
//  import {suma, resta } from './math.js'; // Importar funciones específicas


//2. nuestra funcion principal y va en mayuscula

const App = () => {

  //3. uso de hooks para que funcione react  como useState useEffect

  //4. nuetsras propias funcion JS
  console.log("Hola desde App.jsx");
  const nombre = "Tomas";
  const sumar = (a, b) => {
    return a + b;
  }

  //5. return con nuestro HTML
  // utilizamos fragmentos <></> para devolver un unico elemento en el return
  // en este caso un h1

  return (
    <>
      < Header />
      <Saludar nombre={nombre} />
      <Saludar nombre="Tomi" />
      <h1>Hola{nombre}!</h1>

{
  alumnos.map(({nombre, edad}) => {
    return (
      <>
        <div>{nombre}</div>
        <span>{edad}</span>
      </>
    )
  }
}


      {5+2}
      <h3>Sumar</h3>
      2+3 = {sumar(2, 3)}
      <Boton texto="Sumar" color="rojo" estilo="redondeado"/>
      <Boton texto="Restar" color="azul"  estilo="redondeado"/>
      <Boton texto="Multiplicar"  estilo="redondeado"/>

    </>
  )
}

const SaludarIfElse = ({nombre}) => {
  //Salude consicionamente si tiene noombre 
  //sino Hola Mundo
  if (nombre) {
    return<h1>Hola {nombre}!</h1>
  }else{
  return <h1>Hola Mundo!</h1>}
}
 
// Operaciones Ternarias, condicion? "verda" : "falsa"
const SaludarTernaria = ({nombre}) => {
  return (
    <>
    {nombre ? <h1>Hola {nombre}!</h1> 
            : <h1>Hola Mundo!</h1>
    }
    </>
  )
}

// Operaciones Ternarias, condicion && "verda" : "falsa"
// Si la condicion es verdadera se ejecuta lo de la izquierda
// Si es falsa no se ejecuta nada
// Si no se cumple la condicion no se ejecuta nada
// Si se cumple la condicion se ejecuta lo de la derecha
// 
const Saludar = ({nombre}) => {
  const isCargando = false;
  return (
    <>
    <div className="rojo">Soy un mensaje </div>
    {isCargando && <h3>Cargando Datos...</h3>}
    {nombre && <h1>Hola {nombre}!</h1>}
    </>
  )
}



const Header = () => {
  return (
    <header>
     <h1>Mi pagina </h1>
     <ul> 
     <li>Contacto</li>
     <li>Acerca</li>
     <li>Productos</li>
     </ul>
   
    </header>
  )
}

const Boton = (color, estilo, texto) => {
  console.log(props);

  const { color, estilo, texto} = props;
  const clickBoton = () => {
    alert("Me hicieron click");
  }
  return (
    <button onClick={clickBoton}>{props.texto}</button>
  )
}

export default App;