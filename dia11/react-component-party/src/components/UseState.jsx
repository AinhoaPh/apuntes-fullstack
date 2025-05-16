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

// ------------------- Temporizador -------------------
export const Temporizador = () => {
  // Estado para almacenar el tiempo transcurrido
  const [tiempo, setTiempo] = useState(0);

  // Estado para verificar si el temporizador está activo
  const [isActive, setIsActive] = useState(false);

  // Estado para almacenar el ID del intervalo (para detenerlo después)
  const [intervalId, setIntervalId] = useState(null);

  // Función para iniciar el temporizador
  const handleStart = () => {
    if (isActive) return; // Si ya está activo, no hacer nada

    setIsActive(true); // Cambiar el estado a activo
    const id = setInterval(() => {
      setTiempo((prevTiempo) => prevTiempo + 1); // Incrementar el tiempo cada segundo sumar uno en un intervalo de tiempo que crea una uncion y se ejecuta cada un segundo 
    }, 1000);
    setIntervalId(id); // Guardar el ID del intervalo
  };

  // Función para detener el temporizador
  const handleStop = () => {
    clearInterval(intervalId); // Detener el intervalo
    setIsActive(false); // Cambiar el estado a inactivo
  };

  // Función para reiniciar el temporizador
  const handleReset = () => {
    clearInterval(intervalId); // Detener el intervalo
    setTiempo(0); // Reiniciar el tiempo a 0
    setIsActive(false); // Cambiar el estado a inactivo
  };

  return (
    <div>
      <h2>Temporizador</h2>
      {/* Mostrar el tiempo transcurrido */}
      <p>{tiempo} segundos</p>

      {/* Botón para iniciar el temporizador */}
      <button onClick={handleStart}>Iniciar</button>

      {/* Botón para detener el temporizador */}
      <button onClick={handleStop}>Detener</button>

      {/* Botón para reiniciar el temporizador */}
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
}


//--------- Calculadora ----------//


// export const Calculadora1 = () => {
//   const [resultado, setResultado] = useState(0);
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   const [operacion, setOperacion] = useState("+");

//   const handleCalcular = () => {
//     switch (operacion) {
//       case "+": setResultado(num1 + num2); break;
//       case "-": setResultado(num1 - num2); break;
//       case "*": setResultado(num1 * num2); break;
//       case "/": setResultado(num1 / num2); break;
//       default: setResultado(0); break;
//     }
//   };

//   return (
//     <div>
//       <h2>Calculadora</h2>
//       <input
//         type="number"
//         value={num1}
//         onChange={(e) => setNum1(e.target.valueAsNumber)}
//       />

//       <select
//         value={operacion}
//         onChange={(e) => setOperacion(e.target.value)}
//       >
//         <option value="+"> + </option>
//         <option value="-"> - </option>
//         <option value="*"> × </option>
//         <option value="/"> ÷ </option>
//       </select>

//       <input
//         type="number"
//         value={num2}
//         onChange={(e) => setNum2(e.target.valueAsNumber)}
//       />

//       <button onClick={handleCalcular}>=</button>
//       <p>Resultado: {resultado}</p>
//     </div>
//   );
// };

/* Calculadora */



export const Calculadora = () => {
  // Estado para almacenar los datos del formulario: números, operación y resultado
  const [formData, setFormData] = useState({
    num1: 0,
    num2: 0,
    operacion: "+",

  });
  const [resultado, setResultado] = useState(0);

  const handleCalcular = () => {
    const n1 = parseFloat(formData.num1); // Convertir el primer número a float
    const n2 = parseFloat(formData.num2); // Convertir el segundo número a float
    switch (operacion) {
      case "+": setResultado(n1 + n2); break;
      case "-": setResultado(n1 - n2); break;
      case "*": setResultado(n1 * n2); break;
      case "/": setResultado(n1 / n2); break;
      default: setResultado(0); break;
    }
  };

  // Función para manejar los cambios en los inputs y el select
  const handleChange = (e) => {
    const { name, value } = e.target;


    // Actualizar el estado con los valores ingresados
    setFormData((prevState) => ({
      ...prevState,// copia de esa info

      [name]: value // Actualizar el campo correspondiente (num1, num2 o operacion) los name asigandos


    }));
  };
  const { num1, num2, operacion } = formData; // Desestructuración del estado para obtener los valores de num1, num2 y operacion
  return (
    <>
      <h2>Calculadora</h2>
      {/* Input para el primer número */}
      <input
        type="number"
        name="num1"
        value={num1}
        onChange={handleChange}
      />

      {/* Select para elegir la operación */}
      <select
        name="operacion"
        value={operacion}
        onChange={handleChange}
      >
        <option value="+"> + </option>
        <option value="-"> - </option>
        <option value="*"> X </option>
        <option value="/"> ÷ </option>
      </select>

      {/* Input para el segundo número */}
      <input
        type="number"
        name="num2"
        value={num2}
        onChange={handleChange}
      />

      {/* Botón para calcular el resultado */}
      <button onClick={handleCalcular}>=</button>

      {/* Mostrar el resultado */}
      <p >Resultado:{resultado}</p>
    </>
  );
};




// Carrito


// Agregar boton para finalizar compra y que o Agregar un check box que pregunta si quiere envio a domicilio 

export const CarritoFinal = () => {
  const [carrito, setCarrito] = useState([]);
  const [envio, setEnvio] = useState(false)
  const productos = [
    { id: 1, nombre: "Vestido", precio: 40 },
    { id: 2, nombre: "Pantalón", precio: 40 },
    { id: 3, nombre: "Camiseta", precio: 20 },
    { id: 4, nombre: "Falda", precio: 20 }

  ]

  
  const handleAgregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  }

  // Recorre el array y lo reduce a un valor
  const total = carrito.reduce((total, producto) => total + producto.precio, 0);
  // const setCarrito = carrito.lenght;


  const handleVaciar = () => {
    setCarrito([]);
  }
  // crear una funcion para finalizar total con en vio y meter 
  //{envio ? total + 10 : total}

  const handleFinalizar = () => {
    alert(`Gracias por su compra. Total:${total} `)
    //alert(JSON.stringify(productos, null,)), poder mostar el objeto que queramos.
    setCarrito([]);
    setEnvio(false)
    

  }

  return (
    <>
      <h2>Carrito </h2>
      <h3>Productos</h3>
      <ul>
       
        {productos.map((producto) => {
          const { id, nombre, precio } = producto
          return (<li key={id}>
            ${nombre} - ${precio}
            <button onClick={() => handleAgregarAlCarrito(producto)}>Agregar</button>
          </li>)
        }
        )}

      </ul>
      <hr />
      <p style={{color:total>100?"red":"black"}}>Total:$$</p>

      <label>Envío a domicilio (+10$)
        <input type="checkbox" checked={envio} onChange={(e) => setEnvio(e.target.checked)} />
      </label>
      <hr />

      <button onClick={handleVaciar}>Vaciar Carrito</button>
      <button onClick={handleFinalizar}>Finalizar Compra</button>





    </>
  )
}