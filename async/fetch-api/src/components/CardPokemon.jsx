export const Card = ({ name, image, types, experience,ability }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <ul>
        <li><strong>Tipos:</strong> {types}</li> 
        <li> <strong>Experiencia base:</strong> {experience}</li>
        <li> <strong>Habilidades:</strong> {ability}</li>
      </ul>
    </div>
  );
};