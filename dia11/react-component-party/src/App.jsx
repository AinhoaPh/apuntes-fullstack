import './App.css';
import { ContadorClicks, EjemploCicloVida, EjPadre, EjTemporizador, LocalStorageSync, ObtenerDatosFetch, Padre, TamañoPantalla } from './components/UseEffect';
import UserListFetch from './components/UserListFetch';
import { Ejemplo0Ref, AntiSpamButton, AutoFocusInput, ValorPrevio, VideoPlayer, ClickOutside, ScrollToBottom } from './components/UseRef';
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
      {/* <EjemploCicloVida/>
      <EjTemporizador/> */}
      {/* ej3: Crear un componente que obtenga datos de una API y los muestre en pantalla.(https://jsonplaceholder.typicode.com/posts) */}
      {/* <ObtenerDatosFetch/>
      <ContadorClicks/>
      <TamañoPantalla/>
      <LocalStorageSync/>
      <Padre/>
      <EjPadre/> */}
      <UserListFetch />
      <Ejemplo0Ref />
      <AutoFocusInput />
      <ValorPrevio />
      <AntiSpamButton />
      <VideoPlayer />
      <ClickOutside/>
      <ScrollToBottom/>

    </>
  );
}

export default App;