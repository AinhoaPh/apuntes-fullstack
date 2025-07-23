export const CardReceta = ({ titulo, imagen, animal, ingredientes, preparacion, tiempo }) => {
  return (
    <div className="card">
      <h3>{titulo}</h3>

      {imagen && <img src={imagen} alt={titulo} />}

      <ul>
        <li><strong>Animal:</strong> {animal}</li>
        {tiempo && <li><strong>Tiempo estimado:</strong> {tiempo}</li>}
      </ul>
      <h4>Ingredientes:</h4>
      <ul>
        {ingredientes.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h4>Preparación:</h4>
      <ol>
        {preparacion.map((paso, i) => (
          <li key={i}>{paso}</li>
        ))}
      </ol>
    </div>
  );
};