// src/components/UseState.jsx
import { useState } from 'react';

// ------------------- Contador Simple -------------------
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

// ------------------- Interruptor -------------------
export const InterruptorOnOff = () => {
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => setIsOn(!isOn);

  const darkStyle = { backgroundColor: "black", color: "white" };
  const lightStyle = { backgroundColor: "white", color: "black" };

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

// ------------------- Eventos Input -------------------
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

// ------------------- Lista de Tareas -------------------
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

// ------------------- Login Form -------------------
export const Login = () => {
  const [formData, setformData] = useState({ nombre: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email } = formData;

    if (nombre.trim() === "" || email.trim() === "") {
      alert("Por favor completa todos los campos");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("El email no es válido");
      return;
    }

    const data = `Nombre es: ${formData.nombre} y el email es: ${formData.email}`;
    alert(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          placeholder="Nombre..."
          onChange={handleChange}
        />
        <br /><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Correo..."
          onChange={handleChange}
        />
        <br /><br />
        <button type="submit">Acceder</button>
      </form>
    </>
  );
};

// ------------------- Galería de Imágenes -------------------
export const GaleriaImg = () => {
  const [indice, setIndice] = useState(0);

  const galeria = [
    { id: 1, src: "img1.jpeg" },
    { id: 2, src: "img2.jpeg" },
    { id: 3, src: "img3.jpeg" },
    { id: 4, src: "img4.jpeg" },
    { id: 5, src: "img5.jpeg" },
    { id: 6, src: "img6.jpeg" }
  ];

  const { id, src } = galeria[indice];

  const handleAnterior = () => {
    const nextIndice = indice === 0 ? galeria.length - 1 : indice - 1;
    setIndice(nextIndice);
  };

  const handlePosterior = () => {
    const nextIndice = indice === galeria.length - 1 ? 0 : indice + 1;
    setIndice(nextIndice);
  };

  return (
    <div>
      <h2>Galería de Imágenes</h2>
      <div>
        <button onClick={handleAnterior}>Anterior</button>
        <img src={src} alt={`Imagen ${id}`} />
        <button onClick={handlePosterior}>Posterior</button>
      </div>
    </div>
  );
};

// ------------------- Adivinanza -------------------
export const Adivinanza = () => {
  const [numero, setNumero] = useState(""); // valor del input
  const [adivinado, setAdivinado] = useState(false); // si adivinó el número
  const [intentos, setIntentos] = useState(0);// número de intentos del usuario
  const [mensaje, setMensaje] = useState("");
  const [numeroAleatorio, setNumeroAleatorio] = useState(
    Math.floor(Math.random() * 100) + 1
  );// número aleatorio entre 1 y 100

  const handleChange = (e) => {
    // guardamos el valor del input en el estado
    setNumero(e.target.value);
  };

  const handleAdivinar = () => {
    // convertimos el valor del input a número
    const num = parseInt(numero);

    // validamos que el input sea un número
    if (isNaN(num)) {
      // si no es un número, mostramos un mensaje
      setMensaje("Introduce un número válido...");
      return;
    }

    setIntentos(intentos + 1);
    if (num === numeroAleatorio) {
      setAdivinado(true);
      setMensaje(`¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${intentos + 1} intentos.`);
    } else if (num < numeroAleatorio) {
      setMensaje("El número es mayor!");
    } else {
      setMensaje("El número es menor!");
    }
  };

  const handleReset = () => {
    setNumero("");
    setIntentos(0);
    setMensaje("");
    setAdivinado(false);
    setNumeroAleatorio(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div>
      <h2>Adivina el número del 1 al 100</h2>
      <input type="number" value={numero} onChange={handleChange} />
      <button onClick={handleAdivinar}>Adivinar</button>
      {adivinado && <button onClick={handleReset}>Reiniciar Juego</button>}
      <p>{mensaje}</p>
    </div>
  );
};