

const TarjetaUsuario = ({nombre, edad, ocupacion})=>{
    return (
      <div className="card">
        <h2>{nombre}</h2>
        {edad && <p>Edad:{edad}</p>}
        <p>Ocupacion :{ocupacion ? ocupacion : "-Sin ocupacion-" }</p> 
  
      </div>
    )
  };

  export default TarjetaUsuario;
