// src/components/PerfilUsuario.jsx

const PerfilUsuario = ({ usuario}) => {
    const {nombre, email, img, direccion} = usuario
    const { calle, ciudad, codigoPostal } = direccion;
  
    return (
      <div className="card">
        <h2>{nombre}</h2>
        <img src={img} alt={`Avatar de ${nombre}`} style={{ width: "150px", borderRadius: "10px", listStyle: "none" }} />
        <p>Email: {email}</p>
        <p>Dirección:</p>
        <ul>
          <li>Calle: {calle}</li>
          <li>Ciudad: {ciudad}</li>
          <li>Código Postal: {codigoPostal}</li>
        </ul>
      </div>
    );
  };
  
  export default PerfilUsuario;




  //**
  // import url '@import url('https://assets.css-tricks.ir/font/font.css');'  CONVERTIR cualquier texto a rayitas con font-family: "Mock..."*/