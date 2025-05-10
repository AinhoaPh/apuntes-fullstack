import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <ContadorSimple />
      <InterruptorOnOff />
      <EventosInput />
      <ListaTareas />
    </>
  );
}

const ContadorSimple = () => {
  const [num, setNum] = useState(0);

  const handleSumar = () => {
    setNum(num + 1);
  };

  const handleReset = () => {
    setNum(0);
  };

  return (
    <>
      <h1>Contador Simple</h1>
      <h2>num vale: {num}</h2>

      <h2>Opcion 1</h2>
      <button onClick={() => setNum(num + 1)}>Incrementar</button>
      <button onClick={() => setNum(num - 1)}>Decrementar</button>

      <h2>Opcion 2</h2>
      <button onClick={handleSumar}>Incrementar</button>
      <button onClick={() => setNum(num - 1)}>Decrementar</button>

      <h2>Reset</h2>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

const InterruptorOnOff = () => {
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

  const buttonStyle = isOn ? darkStyle : lightStyle;

  return (
    <div>
      <h2>Interruptor On / Off</h2>
      <button style={buttonStyle} onClick={handleClick}>
        {isOn ? "ON" : "OFF"}
      </button>
      <p>{isOn ? "Luz encendida" : "Luz apagada"}</p>
    </div>
  );
};

const EventosInput = () => {
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
      {showImage && (
        <img src="https://via.placeholder.com/150" alt="foto" />
      )}
    </div>
  );
};

const ListaTareas = () => {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState(["tarea 1", "tarea 2"]);

  const handleAgregarTarea = () => {
    setListaTareas([...listaTareas, tarea]);
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

export default App;