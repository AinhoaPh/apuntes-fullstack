// src/components/UseState.jsx
import { useState } from 'react';

export const ContadorSimple = () => {
  const [num, setNum] = useState(0);

  const handleSumar = () => setNum(num + 1);
  const handleReset = () => setNum(0);

  return (
    <>
      <h1>Contador Simple</h1>
      <h2>num vale: {num}</h2>
      <button onClick={handleSumar}>Incrementar</button>
      <button onClick={() => setNum(num - 1)}>Decrementar</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export const InterruptorOnOff = () => {
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => setIsOn(!isOn);

  const darkStyle = {
    backgroundColor: "black",
    color: "white",
  };
  const lightStyle = {
    backgroundColor: "white",
    color: "black",
  };

  return (
    <div>
      <h2>Interruptor On / Off</h2>
      <button style={isOn ? darkStyle : lightStyle} onClick={handleClick}>
        {isOn ? "ON" : "OFF"}
      </button>
      <p>{isOn ? "Luz encendida" : "Luz apagada"}</p>
    </div>
  );
};

export const EventosInput = () => {
  const [mensaje, setMensaje] = useState("");
  const [showImage, setShowImage] = useState(true);

  return (
    <div>
      <h2>Eventos con input</h2>
      <input
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        onMouseOver={() => setMensaje("El mouse está sobre el input")}
        onMouseOut={() => setMensaje("El mouse ya no está sobre el input")}
      />
      <p>{mensaje}</p>
      {showImage && <img src="https://via.placeholder.com/150" alt="foto" />}
    </div>
  );
};

export const ListaTareas = () => {
  const [tarea, setTarea] = useState("Nueva tarea");
  const [listaTareas, setListaTareas] = useState(["tarea 1", "tarea 2"]);

  const handleAgregarTarea = () => {
    if (tarea.trim() === "") return;
    setListaTareas((prevState) => [...prevState, tarea]);
    setTarea("");
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Escribe tu tarea"
      />
      <button onClick={handleAgregarTarea}>Agregar</button>
      <ul>
        {listaTareas.map((tarea, idx) => (
          <li key={idx}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
};

export const Login = () => {
  // datos por separado
  // const [nombre, setNombre] = useState("");
  // const [email, setEmail] = useState("");
  //datos agrupados en un unico objeto
  const [formData, setformData] = useState({
    nombre: "",
    email: ""
  })

  const handleSubmit = (e) => {
    // en JS se utiliza para omitir en comportamineto por defecto, y no envia el formulario
    e.preventDefault();
    const {nombre, email} = formData;


    // validar datos


    if (nombre.trim() === "" || email.trim() === "") {
      alert("Por favor completa todos los campos");
       return;
     }
    // console.log("Nombre: ", nombre);
    // console.log("Email: ", email); 
     if (!email.includes("@") || !email.includes(".")) {
      alert("El email no es válido");
      return;
    }
    const data = `Nombre es: ${formData.nombre} y el email es: ${formData.email}`;


    // console.log("Target: ", nombre);
    // console.log("Value: ", email);
    alert(data);
  }
  const handleChange = (e) => {
    console.log("Target: ", e.target.name);
    console.log("Value: ", e.target.value);
    setformData(prevState => ({
      ...prevState,
      nombre: e.target.value
    }))

  }


  return (
    <>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="nombre"
          value={formData.nombre}
          placeholder="Nombre..."
          // onChange={(e) => setNombre(e.target.value)}/>
          onChange={handleChange}
          />
        </form>
      <br />
      <form>
        <input type="email"
          name="email"
          value={formData.email}
          placeholder="Correo..."
          onChange={handleChange} />
      </form>


      <button type="submit">Acceder</button>
    </>
  )
}

export  const GaleriaImg = () => {
  const [imagen, setImagen] = useState("https://via.placeholder.com/150");
  const [galeria, setGaleria] = useState([
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/250",
  ]);
  const

  const handleClick = (btn) => {
    setImagen(img);
  };
  return (
    <div>
      <h2>Galería de Imágenes</h2>
      <img src={imagen} alt="Imagen seleccionada" />
      <div>
        {galeria.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Imagen ${idx}`}
   
            style={{ cursor: "pointer", margin: "5px" }}
          />
        ))}
      </div>
      <button>Anterior</button>
      <button>Posterior</button>
    </div>
  );
}