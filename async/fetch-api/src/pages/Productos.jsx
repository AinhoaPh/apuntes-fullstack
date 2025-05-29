import { useState, useEffect } from 'react';
import { CardProd } from '../components/CardProductos';

const Productos = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController(); // Permite cancelar el fetch si el componente se desmonta
    const signal = controller.signal;

    setLoading(true);
    setError("");

    // Llamamos a la API de productos
    fetch('https://fakestoreapi.com/products', { signal })
      .then(res => res.json())
      .then(data => {
        setListaProductos(data); // Guardamos los productos en el estado
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError("Error al cargar los productos");
          console.error(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort(); // Limpieza del efecto si el componente se desmonta
  }, []);

  return (
    <main className="main">
      <h1>Lista de productos</h1>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="container">
        {listaProductos.map(({ id, title, price, description, category, image }) => (
          <CardProd
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
      </div>
    </main>
  );
};

export default Productos;