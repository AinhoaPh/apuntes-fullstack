export const CardProtectora = ({ comunidad, categoria, nombre, descripcion, direccion, telefono, web }) => {
  return (
    <div className="card">
      <h3>{nombre}</h3>

      <ul>
        <li><strong>Comunidad:</strong> {comunidad}</li>
        <li><strong>Categoría:</strong> {categoria}</li>
        {descripcion && <li><strong>Descripción:</strong> {descripcion}</li>}
        {direccion && <li><strong>Dirección:</strong> {direccion}</li>}
        {telefono && <li><strong>Teléfono:</strong> {telefono}</li>}
        {web && (
          <li>
            <strong>Web:</strong>{' '}
            <a href={`https://${web}`} target="_blank">
              {web}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};