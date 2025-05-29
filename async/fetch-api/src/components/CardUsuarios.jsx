export const CardUser = ({ name, gender, dob, picture, location }) => {
    return (
      <div className="usuarios">
        <h3>{name.first} {name.last}</h3>
        <img src={picture.medium} alt={`${name.first} ${name.last}`} />
        <ul>
          <li><strong>Edad:</strong> {dob.age}</li>
          <li><strong>Género:</strong> {gender}</li>
          <li><strong>Estado:</strong> {location.state}</li>
        </ul>
      </div>
    );
  };