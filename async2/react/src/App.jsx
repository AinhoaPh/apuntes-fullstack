import { useEffect, useState } from 'react';

function App() {
  const [datos, setDatos] = useState([]);
  const { VITE_API } = import.meta.env;

  useEffect(() => {
    fetch(VITE_API + '/datos')
      .then(res => res.json())
      .then(data => setDatos(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Triage App</h1>
      <ul>
        {datos.map((item, index) => (
          <li key={index}>
            <h2>{item.titulo}</h2>
            <p>{item.texto}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;