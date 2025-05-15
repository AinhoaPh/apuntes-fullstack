import './App.css';
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
      <ContadorSimple />
      <InterruptorOnOff />
      <EventosInput />
      <ListaTareas />
      <Login />
      <GaleriaImg />
      <Adivinanza />
      <Temporizador/>
      <Calculadora />
      
      <CarritoFinal />
    </>
  );
}

export default App;