import './App.css';
import { AntiSpamButton, AutoFocusInput, ValorPrevio, VideoPlayer } from './components/UseRef';
import {
  ContadorSimple,
  InterruptorOnOff,
  EventosInput,
  ListaTareas,
  Login,
  GaleriaImg,
  Adivinanza,
  TextArea
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
      <TextArea />
      <AutoFocusInput/>
      <ValorPrevio/>
      <AntiSpamButton/>
      <VideoPlayer/>
    </>
  );
}

export default App;