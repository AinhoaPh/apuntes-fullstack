export const CardPersonaje = ({ name, image, status, type, species, gender }) => {

    return (
        <div className="card">
            <img src={image} title={name} alt={name} loading="lazy" />
            <h3>{name}</h3>
            <ul>
                <li>{gender}</li>
                <li>{type}</li>
                <li>{species}</li>
                <li style={{ color: status === "Alive" ? "green" : status === "Dead" ? "red" : "gray" }}>
                    {status}
                </li>

            </ul>
        </div>
    );
}