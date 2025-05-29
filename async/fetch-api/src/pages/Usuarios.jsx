import { useState, useEffect } from 'react';
import { CardUser } from '../components/CardUsuarios';


const Usuarios = () => {
  const [listaUsuarios, setlistaUsuarios] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");
 
   useEffect(() => {
     const controller = new AbortController(); // Permite cancelar el fetch si el componente se desmonta
     const signal = controller.signal;
 
     setLoading(true);
     setError("");
 
     // Llamamos a la API de usuarios
     fetch('https://randomuser.me/api/?results=10', { signal })
       .then(res => res.json())
       .then(data => {
         setlistaUsuarios(data.results); // Guardamos los usuarios en el estado
       })
       .catch(err => {
         if (err.name !== 'AbortError') {
           setError("Error al cargar los usuarios");
           console.error(err.message);
         }
       })
       .finally(() => {
         setLoading(false);
       });
 
     return () => controller.abort(); // Limpieza del efecto si el componente se desmonta
   }, []);
 
   return (
     <main className="main">
       <h1>Lista de usuarios</h1>
 
       {loading && <p>Cargando...</p>}
       {error && <p style={{ color: 'red' }}>{error}</p>}
 
       <div className="container">


       {listaUsuarios.map((p, index) => (
  <CardUser key={index} {...p} />
))}
       </div>
     </main>
   );
}
 
export default Usuarios;