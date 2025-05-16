import './App.css';
import { ContadorClicks, EjemploCicloVida, EjTemporizador, ObtenerDatosFetch } from './components/UseEffect';
import {
  ContadorSimple,
  InterruptorOnOff,
  EventosInput,
  ListaTareas,
  Login,
  GaleriaImg,
  Adivinanza,
  Temporizador,
  Calculadora,

  CarritoFinal
} from './components/UseState';

function App() {





  return (
    <>
    <h2>Ejemplos de useState</h2>
      {/* <ContadorSimple />
      <InterruptorOnOff />
      <EventosInput />
      <ListaTareas />
      <Login />
      <GaleriaImg />
      <Adivinanza />
      <Temporizador/>
      <Calculadora />
      
      <CarritoFinal /> */}
      <h2>Ejemplos de useEffect</h2>
      <EjemploCicloVida/>
      <EjTemporizador/>
      {/* ej3: Crear un componente que obtenga datos de una API y los muestre en pantalla.(https://jsonplaceholder.typicode.com/posts) */}
      <ObtenerDatosFetch/>
      <ContadorClicks/>
    </>
  );
}

export default App;