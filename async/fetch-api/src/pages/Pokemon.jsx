import { useState, useEffect } from 'react';
import { Card } from '../components/CardPokemon';

const Pokemon = () => {
  const [listaPersonajes, setListaPersonajes] = useState([]); // lista final
  const [loading, setLoading] = useState(false); // estado de carga
  const [error, setError] = useState(""); // estado de error

  useEffect(() => {
    const controller = new AbortController(); // controlador para cancelar la petición si es necesario
    const signal = controller.signal; // señal para asociar con las peticiones fetch

    setLoading(true); // activamos el estado de carga
    setError(""); // limpiamos cualquier error previo

    // Paso 1: Pedimos lista de los primeros 100,000 pokémon
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100', { signal })
      .then(res => res.json())
      .then(data => {
        // Paso 2: hacemos fetch a cada uno de los resultados (detalles)
        return Promise.all(
          data.results.map(poke =>
            fetch(poke.url, { signal }) // usamos la misma señal para cada fetch
              .then(res => res.json())
          )
        );
      })
      .then(detalles => {
        // Guardamos la info detallada en el estado
        setListaPersonajes(detalles);
      })
      .catch(err => {
        // Si el error no es causado por la cancelación, lo manejamos
        if (err.name !== 'AbortError') {
          setError("Error al cargar los datos");
          console.error(err);
        }
      })
      .finally(() => {
        // Desactivamos el estado de carga
        setLoading(false);
      });

    // Limpiar si el componente se desmonta
    return () => controller.abort();
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return (
    <main>
      <h1>Lista Pokémon</h1>

      {loading && <p>Cargando...</p>} {/* Mensaje de carga */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mensaje de error */}

      <div className="container">
        {/* Renderizamos la lista de pokémon */}
        {listaPersonajes.map(poke => (
          <Card
            key={poke.id} // clave única para cada tarjeta
            name={poke.name} // nombre del pokémon
            image={poke.sprites.front_default} // imagen del pokémon
            types={poke.types.map(t => t.type.name).join(', ')} // tipos del pokémon
            experience={poke.base_experience} // experiencia base del pokémon
            ability={poke.abilities.map(a => a.ability.name).join(', ')}
          />
        ))}
      </div>
    </main>
  );
};

export default Pokemon;