import { useState, useEffect } from 'react';
import CardPersonaje from './components/CardPersonaje';
import { PersonajesMock } from './mocks/PersonajesMock'; // si quieres usar mock

const Personajes = () => {
  const [loading, setLoading] = useState(false); // estado de carga
  const [error, setError] = useState("");      // estado de error
  const [listaPersonajes, setListaPersonajes] = useState([]); // lista de personajes
  const [info, setInfo] = useState({
    "count": 0,
    "pages": 1,
    "next": null,
    "prev":null
  }); // datos de paginación

  useEffect(() => {
    traerPersonajes();
  }, []);

  // Función para traer personajes desde la API
  const traerPersonajes = async () => {
    try {
      setLoading(true);
      setError(null);

      // Llamada a la API de Rick and Morty
      const response = await fetch('https://rickandmortyapi.com/api/character');

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      // Guardamos personajes e info de paginación
      setListaPersonajes(data.results);
      setInfo(data.info);

    } catch (error) {
      console.error('Tuvimos un error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

//   const listaPersonajes = mockddata.results
  return (
    <>
      <h1>Personajes Rick & Morty</h1>

      {loading && <p>Cargando personajes...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <button>Anterior</button>

      <div className="personajes-grid">
        {listaPersonajes.map((p) => (
          <CardPersonaje key={p.id} {...p} />
        ))}
      </div>

      <p>Total de personajes: {info.count}</p>
      <p>Total de páginas: {info.pages}</p>

      <button>Siguiente</button>
    </>
  );
};

export default Personajes;