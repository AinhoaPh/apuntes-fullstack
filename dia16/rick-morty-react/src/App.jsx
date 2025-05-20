import './App.css';
import { NavSearchParams } from './components/Nav';
import Personajes from './pages/Personajes';
import Lugares from './pages/Lugares';
import Episodios from './pages/Episodios';


function App() {
  // Leemos el parámetro ?page=...
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page') || 'personajes'; // valor por defecto


  let contenido;
  switch (page) {
    case 'lugares':
      contenido = <Lugares />;
      break;
    case 'episodios':
      contenido = <Episodios />;
      break;
    default:
      contenido = <Personajes />;
  }

  return (
    <>
      <NavSearchParams />
      <main>{contenido}</main>
    </>
  );
}

export default App;