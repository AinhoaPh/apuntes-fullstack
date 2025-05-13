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
    const { nombre, email } = formData;


    // validar datos mantiene un solo nivel e condicion, si cumple con las condicionales se ejcuta el codigo

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

export const GaleriaImg = () => {
  //muestra la imagen empezando desde la posicion 0
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
    //  setIndice(indice-1);
    // si estoy en la primera imagen, me lleva a la ultima
    // operador modulo
    const nextIndice = (indice == 0) ? galeria.length - 1 : indice - 1;
    setIndice(nextIndice);
  }
  const handlePosterior = () => {

    // setIndice((prev)=>prev + 1);
    if (indice === galeria.length - 1) {
      setIndice(0);
    }
    else if (indice === 0) {
      setIndice(indice + 1);
    }

    // operador modulo 
    // setIndice((indice)=>(indice+1)% galeria.length);


    //   ternario
    //  const nextIndice = (indice === galeria.length - 1) ? 0 : indice + 1;
    //  setIndice(nextIndice);

  }

  // handle anterior y handle posterior 
  // const indiceAnt = (indice === 0) ? galeria.length - 1 : indice - 1;
  // const indicePost = (indice === galeria.length - 1) ? 0 : indice + 1;

  return (
    <div>
      <h2>Galería de Imágenes</h2>


      <div>
        <button onClick={handlePosterior}>Posterior</button>
        <img src={galeria[id]} alt={`Imagen ${id + 1}`} />
        <button onClick={handleAnterior}>Anterior</button>
      </div>


    </div>
  );
}



export const Adivinanza = () => {
  const [intento, setIntento] = useState();// el numero que ingresa
  const [mensaje, setMensaje] = useState("Prueba con un numero entre 1 y 100");
  const [numeroSecreto, setNumeroSecreto] = useState(0);// numero aleatorio entre 1 y 100
  const [cantIntentos, setCantIntentos] = useState(0);// numero de intentos del usuario
  const [isJugando, setIsJugando] = useState(false);// si ya jugo o no
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;// numero aleatorio entre 1 y 100

  const handleChange = (e) => {
    const { type, name, value } = e.target;// destructuracion de los datos de el evento
    setIntento(value);// el valor del input
  };

  const handleAdivinar = () => {
    const num = parseInt(intento);
    if (num === numeroAleatorio) {
      setMensaje(`Felicidades adivinaste el numero ${numeroAleatorio} en ${cantIntentos + 1} intentos`);
    } else if (num < numeroAleatorio) {
      setMensaje("El numero es mayor");
      setIsJugando("false")

    }
    else {
      setMensaje("El numero es menor");
      setIsJugando("false")
    }

    setCantIntentos(cantIntentos++);
    const iniciarJuego = () => {
      const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      setNumeroSecreto(numeroAleatorio);
      setMensaje("")
    }
    return (
      <div>
        <h2>Adivine el numero del 1 al 100{numeroSecreto}</h2>
        <p>¿Cuál es el número?</p>

        <input type="number" value={intento} onChange={handleChange} />
        <button onClick={handleAdivinar}>Adivinar</button>
        <p>{mensaje}</p>
        {!isJugando && <button onClick={iniciarJuego}>Play</button>}


      </div>
    );
  }

}

export const TextArea = ()  => {  
  const [texto, setTexto] = useState("");
  const [contador, setContador] = useState(0);


  const contadorPalabras = () => {
  
    return texto.split(" ")
  }

  return (
    <div>
      <h2>TextArea</h2>
      <textarea 
      onChange={setTexto(e.target.value)}
        name="" 
        id=""
        placeholder="Escriba su texto"
        value={texto}
        rows={5}
        cols={30} />
      <div>
        <span>Chars: {texto.length}</span> / <span>Words: {contadorPalabras()}</span>
      </div>
      </div>
  )}