import { useState, useEffect } from 'react';
import { Card } from '../components/CardPokemon';

const Pokemon = () => {
  const [listaPersonajes, setListaPersonajes] = useState([]); // lista final
  const [loading, setLoading] = useState(false); // estado de carga
  const [error, setError] = useState(""); // estado de error

  useEffect(() => {
    const controller = new AbortController(); // control para cancelar petición
    const options = {
      signal: controller.signal
    };

    setLoading(true);
    setError("");

    // Paso 1: Pedimos lista de los primeros 20 pokémon
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20', options)
      .then(res => res.json())
      .then(data => {
        // Paso 2: hacemos fetch a cada uno de los resultados (detalles)
        return Promise.all(
          data.results.map(poke =>
            fetch(poke.url, options)
              .then(res => res.json())
          )
        );
      })
      .then(detalles => {
        // Guardamos la info detallada
        setListaPersonajes(detalles);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError("Error al cargar los datos");
          console.error(err);
        }
      })
      .finally(() => {
        setLoading(false);
        controller.abort(); // buena práctica
      });

    // Limpiar si se desmonta
    return () => controller.abort();
  }, []);

  return (
    <main className="main">
      <h1>Pokedex</h1>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="container">
        
        {listaPersonajes.map(poke => (
         
         
          <Card
            key={poke.id}
            name={poke.name}
            image={poke.sprites.front_default}
            types={poke.types.map(t => t.type.name).join(', ')}
            experience={poke.base_experience}
          />
        ))}
      </div>
    </main>
  );
};

export default Pokemon;