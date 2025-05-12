import './App.css';
import {
  ContadorSimple,
  InterruptorOnOff,
  EventosInput,
  ListaTareas,
  Login,
  GaleriaImg
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
    </>
  );
}

export default App;