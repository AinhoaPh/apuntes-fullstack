export const CardPersonaje = ({ name, image, status, type, species, gender }) => {

    return (
        <div className="card">
            <img src={image} title={name} alt={name} loading="lazy" />
            <h3>{name}</h3>
            <ul>
                <li>
                    {gender === "Male" ? <i className="fas fa-mars" style={{ color: "blue"}}></i>: gender === "Female"? <i className="fas fa-venus" style={{ color: "fuchsia"}}></i>: <i className="fas fa-genderless" style={{ color: "gray"}}></i>
                    }
                  
                </li>
                <li>{type}</li>
                <li>{species}</li>
                <li style={{ color: status === "Alive" ? "green" : status === "Dead" ? "red" : "gray" }}>
                    {status}
                </li>




            </ul>
        </div>
    );
}