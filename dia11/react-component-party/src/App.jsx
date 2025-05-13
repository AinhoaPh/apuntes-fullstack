import './App.css';
import {
  ContadorSimple,
  InterruptorOnOff,
  EventosInput,
  ListaTareas,
  Login,
  GaleriaImg,
  Adivinanza
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
    </>
  );
}

export default App;